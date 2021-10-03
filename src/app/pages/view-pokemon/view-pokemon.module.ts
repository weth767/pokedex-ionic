import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPokemonPageRoutingModule } from './view-pokemon-routing.module';

import { ViewPokemonPage } from './view-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPokemonPageRoutingModule
  ],
  declarations: [ViewPokemonPage]
})
export class ViewPokemonPageModule {}
