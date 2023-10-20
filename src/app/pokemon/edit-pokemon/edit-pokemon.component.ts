import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './edit-pokemon.component.html',
})

export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.pokemonService.getPokemonById(+id).subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }

}
