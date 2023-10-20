import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.log(response);
  }

  private handleError(error: Error, errorValues: any) {
    console.error(error);
    return of(errorValues);
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }
}
