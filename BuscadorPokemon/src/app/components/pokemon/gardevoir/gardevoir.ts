import { Component } from '@angular/core';

@Component({
  selector: 'app-gardevoir',
  standalone: true,
  templateUrl: './gardevoir.html',
  styleUrl: './gardevoir.css'
})
export class GardevoirComponent {
  mostrar: boolean = false;

  verPokemon() {
    this.mostrar = true;
  }
}