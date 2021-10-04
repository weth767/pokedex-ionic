export class PokemonResponse {
    public abilities: AbilityResponse[] = [];
    public base_experience: number;
    public forms: Form[] = [];
    public id: number;
    public location_area_encounters: string;
    public moves: Move[] = [];
    public name: string;
    public order: number;
    public species: Specie[] = [];
    public sprites: Sprite;
    public stats: StatResponse[] = [];
    public types: TypeResponse[] = [];
    public weight: number;
}

export class BaseModel {
    public name: string;
    public url: string;
}

export class Ability extends BaseModel {}

export class Move extends BaseModel {}

export class Form extends BaseModel {} 

export class AbilityResponse {
    public ability: Ability;
    public is_hidden: boolean;
    public slot: number;
}

export class Specie extends BaseModel {}

export class Sprite {
    public back_default: string;
    public back_female: string;
    public back_shiny: string;
    public back_shiny_female: string;
    public front_default: string;
    public front_female: string;
    public front_shiny: string;
}

export class Stat extends BaseModel {}

export class StatResponse {
    public base_stat: number;
    public effort: number;
    public stat: Stat;
}

export class Type extends BaseModel {}

export class TypeResponse {
    public slot: number;
    public type: Type;
}