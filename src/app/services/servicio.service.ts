import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  nombre = 'Charizard'
  constructor(private http: HttpClient) { }
  public getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon')
  }
  public getPokemon(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + 'Charizard')
  }
}
