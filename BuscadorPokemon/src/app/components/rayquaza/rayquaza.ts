import { Component } from '@angular/core';

@Component({
  selector: 'app-rayquaza',
  standalone: true,
  templateUrl: './rayquaza.html',
  styleUrl: './rayquaza.css'
})
export class RayquazaComponent {

  mostrarNombre() {
    alert('Has hecho clic en: Rayquaza');
  }

}