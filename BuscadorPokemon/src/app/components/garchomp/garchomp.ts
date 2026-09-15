import { Component } from '@angular/core';

@Component({
  selector: 'app-garchomp',
  standalone: true,
  templateUrl: './garchomp.html',
  styleUrl: './garchomp.css'
})
export class GarchompComponent {

  mostrarNombre() {
    alert('Has hecho clic en: Garchomp');
  }

}