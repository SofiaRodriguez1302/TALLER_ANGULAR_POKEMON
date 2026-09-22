import { Component } from '@angular/core';

@Component({
  selector: 'app-eevee',
  standalone: true,
  templateUrl: './eevee.html',
  styleUrl: './eevee.css'
})
export class EeveeComponent {
  mostrar: boolean = false;

  verPokemon() {
    this.mostrar = true;
  }
}