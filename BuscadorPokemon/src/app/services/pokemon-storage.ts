import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorage {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  consultarPokemon(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nombre.toLowerCase()}`);
  }
}