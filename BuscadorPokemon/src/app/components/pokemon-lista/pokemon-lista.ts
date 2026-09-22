import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-lista.html',
  styleUrl: './pokemon-lista.css'
})
export class PokemonLista {
  misPokemones = [
    { nombre: 'eevee', id: 133, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png' },
    { nombre: 'garchomp', id: 445, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png' },
    { nombre: 'gardevoir', id: 282, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png' },
    { nombre: 'lucario', id: 448, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png' },
    { nombre: 'rayquaza', id: 384, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png' },
    { nombre: 'snorlax', id: 143, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png' }
  ];
}