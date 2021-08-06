import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service'
import { ActivatedRoute } from '@angular/router';
import { Item } from '../classes/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private ItemsService: ItemsService, private activatedRoute: ActivatedRoute) { }
  items: Item[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => this.items = this.ItemsService.getItems(p.id));
  }
  

}
