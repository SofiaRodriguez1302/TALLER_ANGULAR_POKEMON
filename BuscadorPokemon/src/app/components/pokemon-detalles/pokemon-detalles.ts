import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonStorage } from '../../services/pokemon-storage';

@Component({
  imports: [ RouterLink ],
  standalone: true, 
  selector: 'app-pokemon-detalles',
  styleUrl: './pokemon-detalles.css',
  templateUrl: './pokemon-detalles.html',
})
export class PokemonDetalles implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorage);

  pokemonData: any = null;
  cargando: boolean = true;

  ngOnInit(): void {
    // Escucha cambios directos en los parámetros de la URL
    this.route.params.subscribe(params => {
      const pokeName = params['nombre'] || params['name'];

      if (pokeName) {
        this.cargando = true;
        this.pokemonData = null; // Limpia los datos anteriores de inmediato

        this.pokeService.consultarPokemon(pokeName.toLowerCase()).subscribe({
          next: (data) => {
            this.pokemonData = data;
            this.cargando = false;
          },
          error: (err) => {
            console.error('Error al obtener el Pokémon:', err);
            this.cargando = false;
            this.pokemonData = null;
          }
        });
      }
    });
  }
}