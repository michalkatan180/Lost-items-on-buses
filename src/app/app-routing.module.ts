import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    pathMatch: 'full'
  },{
    path: 'items/:id',
    component: ItemsComponent
  }, {
    path: 'addItem',
    component: AdditemComponent
  },
  {
    path: '**',
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
