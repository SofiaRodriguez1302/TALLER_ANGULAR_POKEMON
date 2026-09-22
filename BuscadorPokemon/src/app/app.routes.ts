import { Routes } from '@angular/router';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario';
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon';
import { PokemonLista } from './components/pokemon-lista/pokemon-lista';
import { PokemonDetalles } from './components/pokemon-detalles/pokemon-detalles';

export const routes: Routes = [
  { path: 'registro', component: RegistroUsuario },
  { path: 'buscador', component: BuscadorPokemon },
  { path: 'listado', component: PokemonLista },
  { path: 'pokemon/:nombre', component: PokemonDetalles },
  { path: '', redirectTo: 'registro', pathMatch: 'full' }
];