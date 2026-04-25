import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as L from 'leaflet';
import { CollabStoreService } from '../../services/collab-store.service';

@Component({
  selector: 'app-suivi',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './suivi.component.html',
  styleUrl: './suivi.component.scss'
})
export class SuiviComponent implements AfterViewInit, OnDestroy {
  private map?: L.Map;

  constructor(private readonly store: CollabStoreService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  private initMap(): void {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'});

    this.map = L.map('map', { zoomControl: true }).setView([48.8566, 2.3522], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'}).addTo(this.map);

    const vehicles = [
      { lat: 48.86, lng: 2.33, label: 'Pierre Martin' },
      { lat: 48.85, lng: 2.36, label: 'Remy Evans' },
      { lat: 48.87, lng: 2.29, label: 'Kerry Paris' },
      { lat: 48.84, lng: 2.38, label: 'Anfuty' },
      { lat: 48.88, lng: 2.34, label: 'Remy Tost' }
    ];

    vehicles.forEach((vehicle) => {
      L.marker([vehicle.lat, vehicle.lng])
        .addTo(this.map!)
        .bindPopup(vehicle.label);
    });
  }

  public onNewTrip(): void {
    this.store.logAction('employee', this.store.currentUser()?.name ?? 'Employé', 'Crée un nouveau trajet');
  }

  public logNewTrip(): void {
    this.onNewTrip();
  }

  get returnRoute(): string {
    return this.store.mode() === 'centralized' ? '/dashboard' : '/trajets';
  }
}
