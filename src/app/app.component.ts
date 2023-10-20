import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: number) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(p => p.id === pokemonId);

    if (pokemon) {
      console.log(`Vous avez demandé ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Le pokemon ${pokemonId} n'existe pas`);
    }
  }
}
