import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  offset=0 

  // holds all the pokemon
  pokemon = []; 

  // injecting the HttpService into the component
  constructor(private http: HttpService) { }

  // lifecycle hook that runs when the component is loaded
  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.http.getPokemons(this.offset)
      .subscribe(data => {
        console.log("data", data) 
        this.pokemon = data
        }
      )
  } 



}
