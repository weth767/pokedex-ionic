import { PokemonResponse } from './../models/pokemon.model';
import { ResponseData } from './../models/response-data.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  readonly endpoint = environment.endpoint

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`https://pokeapi.co/api/v2/pokemon/?limit=10`);
  }

  public getByUrl(url: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(url);
  }
}
