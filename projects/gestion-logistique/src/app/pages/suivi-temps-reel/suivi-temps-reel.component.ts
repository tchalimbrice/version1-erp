import { Component, signal, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface VehiculeGPS {
  id: string;
  immatriculation: string;
  chauffeur: string;
  statut: 'en route' | 'arrêté' | 'hors ligne';
  lat: number;
  lng: number;
  vitesse: number;
  destination: string;
  commande: string;
  derniereMAJ: string;
}

@Component({
  selector: 'app-suivi-temps-reel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    .page { padding: 28px 32px; }
    .page__header { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; flex-wrap:wrap; gap:12px; }
    .page__title  { font-size:22px; font-weight:800; color:#0f2942; margin:0; }
    .page__sub    { font-size:13px; color:#7f8c8d; margin:4px 0 0; }
    .layout { display:grid; grid-template-columns:320px 1fr; gap:20px; height:calc(100vh - 180px); }
    .panel  { background:#fff; border-radius:14px; border:1px solid #dde3ea; overflow:hidden; display:flex; flex-direction:column; }
    .panel__head { padding:14px 18px; border-bottom:1px solid #f0f4f8; font-size:14px; font-weight:700; color:#0f2942; display:flex; align-items:center; justify-content:space-between; }
    .panel__body { flex:1; overflow-y:auto; }
    .vehicle-item { padding:14px 18px; border-bottom:1px solid #f7f9fb; cursor:pointer; transition:background .12s; }
    .vehicle-item:hover { background:#f7faff; }
    .vehicle-item.selected { background:#eaf3fd; border-left:3px solid #1a5276; }
    .v-name  { font-weight:700; font-size:13px; color:#0f2942; }
    .v-driver{ font-size:12px; color:#7f8c8d; margin:2px 0; }
    .v-dest  { font-size:11px; color:#1a5276; }
    .v-meta  { display:flex; gap:10px; margin-top:6px; font-size:11px; align-items:center; }
    .badge   { display:inline-block; padding:2px 8px; border-radius:20px; font-weight:700; font-size:11px; }
    .badge--green  { background:#d5f5e3; color:#1e8449; }
    .badge--yellow { background:#fef9e7; color:#b7950b; }
    .badge--gray   { background:#f0f3f4; color:#7f8c8d; }
    .map-container { flex:1; position:relative; }
    #logi-map { width:100%; height:100%; border-radius:0 0 14px 14px; }
    .map-legend { position:absolute; bottom:16px; left:16px; background:rgba(255,255,255,.95); border-radius:10px; padding:10px 14px; font-size:12px; box-shadow:0 2px 10px rgba(0,0,0,.1); z-index:1000; }
    .legend-row { display:flex; align-items:center; gap:6px; margin-bottom:4px; }
    .dot { width:12px; height:12px; border-radius:50%; flex-shrink:0; }
    .kpi-row { display:flex; gap:12px; margin-bottom:16px; flex-wrap:wrap; }
    .kpi { background:#fff; border-radius:12px; border:1px solid #dde3ea; padding:14px 18px; flex:1; min-width:130px; }
    .kpi__val { font-size:22px; font-weight:900; }
    .kpi__lbl { font-size:11px; color:#7f8c8d; font-weight:600; text-transform:uppercase; letter-spacing:.4px; margin-top:2px; }
    .pulse { display:inline-block; width:8px; height:8px; border-radius:50%; background:#27ae60; animation:pulse 1.5s infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
  `],
  template: `
<div class="page">
  <div class="page__header">
    <div>
      <h1 class="page__title">📍 Suivi en temps réel</h1>
      <p class="page__sub">Position et statut des véhicules — actualisé toutes les 30 s <span class="pulse"></span></p>
    </div>
  </div>

  <div class="kpi-row">
    <div class="kpi">
      <div class="kpi__val" style="color:#27ae60">{{ enRoute() }}</div>
      <div class="kpi__lbl">En route</div>
    </div>
    <div class="kpi">
      <div class="kpi__val" style="color:#f39c12">{{ arretes() }}</div>
      <div class="kpi__lbl">Arrêtés</div>
    </div>
    <div class="kpi">
      <div class="kpi__val" style="color:#7f8c8d">{{ horsLigne() }}</div>
      <div class="kpi__lbl">Hors ligne</div>
    </div>
    <div class="kpi">
      <div class="kpi__val" style="color:#1a5276">{{ vehicules().length }}</div>
      <div class="kpi__lbl">Total véhicules</div>
    </div>
  </div>

  <div class="layout">
    <!-- Liste véhicules -->
    <div class="panel">
      <div class="panel__head">
        <span>Véhicules ({{ vehicules().length }})</span>
      </div>
      <div class="panel__body">
        @for (v of vehicules(); track v.id) {
          <div class="vehicle-item" [class.selected]="selectedId() === v.id" (click)="selectVehicle(v)">
            <div class="v-name">🚛 {{ v.immatriculation }}</div>
            <div class="v-driver">{{ v.chauffeur }}</div>
            <div class="v-dest">→ {{ v.destination }}</div>
            <div class="v-meta">
              <span class="badge"
                [class.badge--green]="v.statut==='en route'"
                [class.badge--yellow]="v.statut==='arrêté'"
                [class.badge--gray]="v.statut==='hors ligne'">
                {{ v.statut }}
              </span>
              @if (v.statut === 'en route') {
                <span style="color:#555;">{{ v.vitesse }} km/h</span>
              }
              <span style="color:#bbb;margin-left:auto;">{{ v.derniereMAJ }}</span>
            </div>
            @if (v.commande) {
              <div style="font-size:11px;color:#1a5276;margin-top:4px;">📋 {{ v.commande }}</div>
            }
          </div>
        }
      </div>
    </div>

    <!-- Carte -->
    <div class="panel">
      <div class="panel__head">
        <span>Carte de suivi — Abidjan</span>
        @if (selected()) {
          <span style="font-size:12px;color:#1a5276;font-weight:600;">{{ selected()!.immatriculation }} sélectionné</span>
        }
      </div>
      <div class="map-container">
        <div id="logi-map" #mapEl></div>
        <div class="map-legend">
          <div class="legend-row"><div class="dot" style="background:#27ae60"></div> En route</div>
          <div class="legend-row"><div class="dot" style="background:#f39c12"></div> Arrêté</div>
          <div class="legend-row"><div class="dot" style="background:#95a5a6"></div> Hors ligne</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
})
export class SuiviTempsReelComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapEl') mapEl!: ElementRef<HTMLDivElement>;

  private map: any = null;
  private markers: any[] = [];
  private L: any = null;
  private timer: any = null;

  vehicules = signal<VehiculeGPS[]>([
    { id:'1', immatriculation:'AB 1234 CI', chauffeur:'KOFFI Armand',    statut:'en route', lat:5.3600, lng:-4.0083, vitesse:65, destination:'Yopougon Marché', commande:'CMD-0041', derniereMAJ:'Il y a 1 min' },
    { id:'2', immatriculation:'CD 5678 CI', chauffeur:'BAMBA Seydou',    statut:'arrêté',   lat:5.3450, lng:-3.9900, vitesse:0,  destination:'Port Abidjan',     commande:'CMD-0039', derniereMAJ:'Il y a 3 min' },
    { id:'3', immatriculation:'EF 9012 CI', chauffeur:'COULIBALY Issa',  statut:'en route', lat:5.3700, lng:-4.0200, vitesse:48, destination:'Cocody Riviera',   commande:'CMD-0042', derniereMAJ:'Il y a 2 min' },
    { id:'4', immatriculation:'GH 3456 CI', chauffeur:'DIALLO Moussa',   statut:'hors ligne',lat:5.3300, lng:-4.0100, vitesse:0, destination:'–',                commande:'',         derniereMAJ:'Il y a 2 h' },
    { id:'5', immatriculation:'IJ 7890 CI', chauffeur:'OUATTARA Brahima',statut:'en route', lat:5.3550, lng:-3.9750, vitesse:72, destination:'Abobo Terminal',   commande:'CMD-0040', derniereMAJ:'Il y a 30 s' },
  ]);

  selectedId = signal<string | null>(null);
  selected = signal<VehiculeGPS | null>(null);

  enRoute  = () => this.vehicules().filter(v => v.statut === 'en route').length;
  arretes  = () => this.vehicules().filter(v => v.statut === 'arrêté').length;
  horsLigne= () => this.vehicules().filter(v => v.statut === 'hors ligne').length;

  selectVehicle(v: VehiculeGPS) {
    this.selectedId.set(v.id);
    this.selected.set(v);
    if (this.map) this.map.setView([v.lat, v.lng], 14);
  }

  async ngAfterViewInit() {
    await this.loadLeaflet();
    this.initMap();
    this.timer = setInterval(() => this.simulateMovement(), 5000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
    if (this.map) { this.map.remove(); this.map = null; }
  }

  private async loadLeaflet() {
    if (typeof window === 'undefined') return;
    if ((window as any).L) { this.L = (window as any).L; return; }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    await new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => { this.L = (window as any).L; resolve(); };
      document.head.appendChild(script);
    });
  }

  private initMap() {
    if (!this.L || !this.mapEl?.nativeElement) return;
    this.map = this.L.map(this.mapEl.nativeElement, { zoomControl: true }).setView([5.355, -4.000], 12);

    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.renderMarkers();
  }

  private renderMarkers() {
    if (!this.L || !this.map) return;
    this.markers.forEach(m => m.remove());
    this.markers = [];

    this.vehicules().forEach(v => {
      const color = v.statut === 'en route' ? '#27ae60' : v.statut === 'arrêté' ? '#f39c12' : '#95a5a6';
      const icon = this.L.divIcon({
        className: '',
        html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
        iconSize: [14, 14], iconAnchor: [7, 7]
      });

      const marker = this.L.marker([v.lat, v.lng], { icon })
        .addTo(this.map)
        .bindPopup(`
          <b>${v.immatriculation}</b><br>
          ${v.chauffeur}<br>
          Statut : <b>${v.statut}</b><br>
          ${v.vitesse > 0 ? `Vitesse : ${v.vitesse} km/h<br>` : ''}
          Destination : ${v.destination}
        `);
      this.markers.push(marker);
    });
  }

  private simulateMovement() {
    this.vehicules.update(list => list.map(v => {
      if (v.statut !== 'en route') return v;
      return {
        ...v,
        lat: v.lat + (Math.random() - 0.5) * 0.003,
        lng: v.lng + (Math.random() - 0.5) * 0.003,
        vitesse: Math.max(20, Math.min(90, v.vitesse + (Math.random() - 0.5) * 10)),
        derniereMAJ: 'À l\'instant'
      };
    }));
    this.renderMarkers();
  }
}
