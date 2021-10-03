import { PokemonResponse } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon: PokemonResponse;

  constructor() { }

  ngOnInit(): void {}

  public get Utils(): typeof Utils {
    return Utils;
  }
}
