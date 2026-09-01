import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon, PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query = 'ditto';
  pokemon: Pokemon | null = null;
  loading = false;
  error = '';

  constructor(
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef
  ) {}

  buscar(): void {
    const term = this.query.trim();
    if (!term) {
      this.error = 'Escribe el nombre de un Pokémon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.pokemonService.getPokemon(term).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = `No se encontró ningún Pokémon llamado "${term}".`;
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }
}
