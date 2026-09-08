import {Routes, ROUTES} from '@angular/router'
import {RegistroUsuario} from './components/resgistro-usuario/registro-usuario';
import {BuscadorPokemon} from './components/buscador-pokemon/buscador-pokemon';

export const routes: Routes = [
{ path: '', redirectTo: 'registro', pathMatch: 'full'},
{ path: 'registro', component: RegistroUsuario},
{ path: 'buscador', component: BuscadorPokemon},
9 path: '**', redirectTo: 'registro'];

