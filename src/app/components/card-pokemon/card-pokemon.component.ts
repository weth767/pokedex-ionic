import { PokemonResponse } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon: PokemonResponse;

  constructor(private nav: NavController) { }

  ngOnInit(): void {}

  public get Utils(): typeof Utils {
    return Utils;
  }

  public viewPokemon() {
    this.nav.navigateForward('view-pokemon', {
      queryParams: {
        pokemon: JSON.stringify(this.pokemon),
      },
      skipLocationChange: true
    });
  }
}
