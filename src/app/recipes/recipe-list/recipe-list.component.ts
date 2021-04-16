import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  	new Recipe('Lasagna Bolognese', 'Layers of flat lasagna noodles baked with alternating layers of slow-cooked Bolognese sauce, bechamel, and Parmesan cheese.', 'https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/recipes/su/05/01/lasagna-su-682512-x.jpg'),
  	new Recipe('Birria Tacos', 'a true showstopper. It begins with braising a birria de rez and then making a consomé and frying up tacos with Oaxacan cheese.', 'https://www.acozykitchen.com/wp-content/uploads/2021/01/BirriaTacos-11-1227x1536-2-500x500.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
