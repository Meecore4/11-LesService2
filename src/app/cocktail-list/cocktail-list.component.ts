import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit{

  data : any;
  cocktails : any;

  constructor(public cocktailService : CocktailService){


  }

  ngOnInit(): void {

    this.cocktailService.getCocktail().subscribe({
      next: (data) => {this.data = data; this.cocktails = this.data.mycocktails},
      error: () => {console.log('erreur')},
      complete: () => {}

    });}
  }


