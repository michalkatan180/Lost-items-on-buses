import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoriesService) {

  }
  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }
}
