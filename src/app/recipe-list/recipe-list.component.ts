import { Component, OnInit } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  private recipeUrl = 'http://localhost:8080/api/recipes';

  constructor(private http: Http) { }

  ngOnInit() {
    this.recipes = this.getRecipes();
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipeUrl)
      .map((response: Response) => <Recipe[]>response.json())
  }
}
