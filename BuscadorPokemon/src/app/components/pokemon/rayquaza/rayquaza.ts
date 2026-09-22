import { Component } from '@angular/core';

@Component({
  selector: 'app-rayquaza',
  standalone: true,
  templateUrl: './rayquaza.html',
  styleUrl: './rayquaza.css'
})
export class RayquazaComponent {
  mostrar: boolean = false;

  verPokemon() {
    this.mostrar = true;
  }
}