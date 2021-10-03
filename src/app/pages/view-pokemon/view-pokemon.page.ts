import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.page.html',
  styleUrls: ['./view-pokemon.page.scss'],
})
export class ViewPokemonPage implements OnInit {
  pokemon: PokemonResponse = new PokemonResponse();

  constructor() { }

  ngOnInit(): void {
  }

}
