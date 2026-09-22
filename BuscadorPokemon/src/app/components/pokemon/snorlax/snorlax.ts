import { Component } from '@angular/core';

@Component({
  selector: 'app-snorlax',
  standalone: true,
  templateUrl: './snorlax.html',
  styleUrl: './snorlax.css'
})
export class SnorlaxComponent {
  mostrar: boolean = false;

  verPokemon() {
    this.mostrar = true;
  }
}