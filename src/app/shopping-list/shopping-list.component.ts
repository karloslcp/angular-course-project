import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
  	new Ingredient('Rabanos', 3),
  	new Ingredient('Platanos', 1),
  	new Ingredient('Gatos', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
