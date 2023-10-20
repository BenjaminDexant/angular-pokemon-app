import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
})

export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.pokemon = this.pokemonService.getPokemonById(+id);
    }
  }

}
