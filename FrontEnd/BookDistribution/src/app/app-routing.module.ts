import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from 'src/app/book-list/book-list.component';
import {BookOrderComponent} from 'src/app/book-order/book-order.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path:'booklist', component: BookListComponent },
  { path:'bookorder', component: BookOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponent = [BookListComponent, BookOrderComponent]
