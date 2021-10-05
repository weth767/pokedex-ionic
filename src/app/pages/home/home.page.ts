import { ResponseData } from './../../models/response-data.model';
import { Utils } from './../../utils/utils';
import { PokemonResponse } from './../../models/pokemon.model';
import { PokedexService } from './../../services/pokedex.service';
import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @BlockUI() blockUi: NgBlockUI;
  pokemons: PokemonResponse[] = [];
  data: ResponseData;
  originalPokemonsList: PokemonResponse[] = [];

  constructor(private service: PokedexService) { }

  ngOnInit(): void {
    this.blockUi.start();
    this.service.getAll()
    .pipe((finalize(() => this.blockUi.stop())))
    .subscribe((result) => {
      this.data = result;
      result.results.forEach((result) => {
        this.service.getByUrl(result.url).subscribe((pokemonResult) => {
          this.pokemons.push(pokemonResult);
          this.originalPokemonsList.push(pokemonResult);
        });
      });
    });
  }

  public search(event: any): void {
    if (event.detail) {
      this.pokemons = this.originalPokemonsList.filter((pokemon) => pokemon.name.includes(event.detail.value.toLowerCase()));
    }
  }

  public moreData(event: any): void {
    this.blockUi.start();
    this.service.getAll(this.data.next)
    .pipe((finalize(() => this.blockUi.stop())))
    .subscribe((result) => {
      this.data = result;
      result.results.forEach((result) => {
        this.service.getByUrl(result.url).subscribe((pokemonResult) => {
          this.pokemons.push(pokemonResult);
          this.originalPokemonsList.push(pokemonResult);
        });
        event.target.complete();
      });
    });
  }
}
