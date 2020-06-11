import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // this is Typescript, not Javascript, which is why it might look funky to you JS veterans. You don've to use TS btw
  clickCounter: number = 0; 
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1; 
  }


}
