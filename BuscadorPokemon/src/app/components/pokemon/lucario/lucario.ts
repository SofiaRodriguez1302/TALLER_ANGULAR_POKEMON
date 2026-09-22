import { Component } from '@angular/core';

@Component({
  selector: 'app-lucario',
  standalone: true,
  templateUrl: './lucario.html',
  styleUrl: './lucario.css'
})
export class LucarioComponent {
  mostrar: boolean = false;

  verPokemon() {
    this.mostrar = true;
  }
}