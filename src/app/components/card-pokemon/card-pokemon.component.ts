import { PokemonResponse, TypeResponse } from './../../models/pokemon.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  public getGradientClass(types: TypeResponse[]): string {
    let style = 'background: linear-gradient(90deg, ';
    style += types.map((type) => `var(--${type.type.name})`).join(',') + ') 1';
    return style;
  }

  public getCardStyleClass(types: TypeResponse[]): string {
    return types.length > 1 ? this.getGradientClass(types): 'border: 0.5vw solid var(--' + types[0].type.name + ')'
  }
}
