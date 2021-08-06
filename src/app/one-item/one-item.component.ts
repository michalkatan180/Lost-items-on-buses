import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../classes/item';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) {
  }
  @Input() it: Item;
  ngOnInit(): void {
  }
  catColor(): string {
    return this.categoriesService.getColorByCatId(this.it.categoryId);
  }
}
