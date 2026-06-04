import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parcelles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './parcelles.component.html',
  styleUrl: './parcelles.component.scss'
})
export class ParcellesComponent {}
