import { IonicModule } from '@ionic/angular';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CardPokemonComponent],
    entryComponents: [CardPokemonComponent],
    imports: [IonicModule, CommonModule],
    providers: [],
    bootstrap: [],
    exports: [CardPokemonComponent]
  })
export class ComponentsModule {}