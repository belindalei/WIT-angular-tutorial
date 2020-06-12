import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from './pokemon';


// Injectable decorator marks this as a service that can be injected anywhere
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemons(offset = 0): Observable<Pokemon[]> {
    // fetches data from the Pokemon API
    //using Pokemon[] as a type specifier to use TypeScript capabilities, which reduces errors during compile time
    return this.http
      .get<Pokemon[]>(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`)
      .pipe(
        map((result) => {
          return result['results'];
        }),
        map((pokemon) => {
          return pokemon.map((poke, index) => {
            poke.image = this.getPokeImage(index + offset + 1);
            poke.pokeIndex = offset + index + 1;
            return poke;
          });
        })
      );
  }
  
  getPokeImage(index) {
    return `${this.imageUrl}${index}.png`;
  }
  
  //search bar function
  // findPokemon(search) {
  //   return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
  //     map((pokemon) => {
  //       pokemon['image'] = this.getPokeImage(pokemon['id']);
  //       pokemon['pokeIndex'] = pokemon['id'];
  //       return pokemon;
  //     })
  //   );
  // }



//getting details of the pokemon
  // getPokeDetails(index) {
  //   return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(
  //     map((poke) => {
  //       let sprites = Object.keys(poke['sprites']);
  //       poke['images'] = sprites
  //         .map((spriteKey) => poke['sprites'][spriteKey])
  //         .filter((img) => img);
  //       return poke;
  //     })
  //   );
  // }
}
