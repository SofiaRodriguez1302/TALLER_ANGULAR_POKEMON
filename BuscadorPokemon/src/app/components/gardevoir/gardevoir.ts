import { Component } from '@angular/core';

@Component({
  selector: 'app-gardevoir',
  standalone: true,
  templateUrl: './gardevoir.html',
  styleUrl: './gardevoir.css'
})
export class GardevoirComponent {

  mostrarNombre() {
    alert('Has hecho clic en: Gardevoir');
  }

}