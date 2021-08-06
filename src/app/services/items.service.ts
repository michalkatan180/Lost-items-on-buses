import { Injectable } from '@angular/core';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Item[]=[];

  constructor() {

    this.items.push(new Item("white bag", 567, "053-388883", 1));
    this.items.push(new Item("pink bag", 504, "053-3177773", 1));
    this.items.push(new Item("black wallet", 531, "053-44444444",1));
    this.items.push(new Item("gray suitcase", 525, "053-3153153", 2));
    this.items.push(new Item("small suitcase", 524, "053-2366662", 2));
    this.items.push(new Item("Buga-Boo strooler", 186, "053-2323232", 3));
    this.items.push(new Item("yoyo strooler", 286, "053-2311132",3));
    this.items.push(new Item("shirt", 24, "053-2355532", 4));
    this.items.push(new Item("skirt", 24, "053-1122222", 4));
    this.items.push(new Item("shoes", 24, "053-77777777", 4));
    this.items.push(new Item("socks", 21, "053-88888888", 4));
    this.items.push(new Item("belt", 27, "053-1010101", 4));
  }
  getItems(id?: number): Item[] {
    if (id) return this.getByCategoryId(id);
    return this.items;
  }
  getById(id: number): Item {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) return this.items[i];
    }
    return null;
  }
  getByCategoryId(id: number): Item[] {
    let tmp: Item[]=[];
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].categoryId == id) tmp.push(this.items[i]);
    }
    return tmp;
  }
  add(item:Item):void{
    if(item)this.items.push(item);
  }
}
