import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPokemonPage } from './view-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPokemonPageRoutingModule {}
