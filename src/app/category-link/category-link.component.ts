import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../classes/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-link',
  templateUrl: './category-link.component.html',
  styleUrls: ['./category-link.component.scss']
})
export class CategoryLinkComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  @Input() inputCategory: Category;

  ngOnInit(): void {
  }

  catColor(): string {
    return this.categoriesService.getColorByCatId(this.inputCategory.id);
  }

  
}
