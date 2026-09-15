import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LucarioComponent } from './components/lucario/lucario';
import { EeveeComponent } from './components/eevee/eevee';
import { SnorlaxComponent } from './components/snorlax/snorlax';
import { GardevoirComponent } from './components/gardevoir/gardevoir';
import { RayquazaComponent } from './components/rayquaza/rayquaza';
import { GarchompComponent } from './components/garchomp/garchomp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucarioComponent,
    EeveeComponent,
    SnorlaxComponent,
    GardevoirComponent,
    RayquazaComponent,
    GarchompComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Mi Lista de Pokémones';
}