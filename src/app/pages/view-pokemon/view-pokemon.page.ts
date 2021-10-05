import { Utils } from './../../utils/utils';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonResponse } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.page.html',
  styleUrls: ['./view-pokemon.page.scss'],
})
export class ViewPokemonPage implements OnInit {
  pokemon: PokemonResponse = new PokemonResponse();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pokemon = JSON.parse(params.pokemon);
      console.log(this.pokemon);
    });
  }

  public get Utils(): typeof Utils {
    return Utils;
  }
}
