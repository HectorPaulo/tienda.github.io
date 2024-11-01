import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ver = false;
  favoritos = [
    'Minecraft',
    'COD',
    'League of Legends',
    'Halo',
    'Assassins Creed',
    'Forza Horizon'
  ];
  iAm = {
    name : 'Héctor Adrián',
    lastName : 'Paulo Vázquez',
    age : 20,
    descripcion : 'Soy un estudiante y me gusta angular'
  };
  verMas(){
    this.ver = !this.ver;
  }
}
