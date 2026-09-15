import { Component } from '@angular/core';

@Component({
  selector: 'app-lucario',
  standalone: true,
  templateUrl: './lucario.html',
  styleUrl: './lucario.css'
})
export class LucarioComponent {

  mostrarNombre() {
    alert('Has hecho clic en: Lucario');
  }

}