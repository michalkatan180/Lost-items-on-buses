import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { CategoryLinkComponent } from './category-link/category-link.component';
import { ItemsComponent } from './items/items.component';
import { OneItemComponent } from './one-item/one-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    MenuComponent,
    CategoryLinkComponent,
    ItemsComponent,
    OneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
