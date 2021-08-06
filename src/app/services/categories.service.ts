import { Injectable } from '@angular/core';
import { Category } from '../classes/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Category[] = [];

  constructor() {
    this.categories.push(new Category("bags and wallets", 1, "rgb(255, 203, 251)"));
    this.categories.push(new Category("suitcases", 2, "rgb(208, 203, 255)"));
    this.categories.push(new Category("stroolers", 3, "rgb(255, 203, 203)"));
    this.categories.push(new Category("clothes", 4, "rgb(236, 255, 203)"));
  }
  getColorByCatId(id:number): string {
    for(var i=0;i<this.categories.length;i++)
    if(this.categories[i].id==id)return this.categories[i].color;
    return null;
  }
  getAll(): Category[] {
    return this.categories;
  }
}
