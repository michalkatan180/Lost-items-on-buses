import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { Category } from '../classes/category';
import { CategoriesService } from '../services/categories.service';
import { ItemsService } from '../services/items.service';
import { Item } from '../classes/item';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  categories: Category[] = [];


  constructor(private fb: FormBuilder, private categoriesService: CategoriesService, private itemsService: ItemsService, private router: Router) {
  }

  myForm= this.fb.group({
    description: new FormControl("", Validators.required),
    line: new FormControl("", Validators.required),
    category: new FormControl(),
    phone: new FormControl("", Validators.required)
  });


  ngOnInit(): void {
    this.categories = this.categoriesService.getAll();
  }
  save(): void {
    this.itemsService.add(new Item(
        this.myForm.value.description,
        parseInt(this.myForm.value.line),
        this.myForm.value.phone,
        this.myForm.value.category));
    this.router.navigate(["items"]);
  }
}

