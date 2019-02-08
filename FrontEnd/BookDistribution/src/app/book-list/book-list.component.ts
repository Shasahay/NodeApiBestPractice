import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service'
import {Book} from '../models/book'

@Component({
  selector: 'app-book-list',
  templateUrl:'/book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
books: Book[];
  constructor(private _prodService : ProductService) { }

  ngOnInit() {
    debugger
       // this.books= this._prodService.getCheck();
       this._prodService.getProducts().subscribe(data => {this.books = data})
       console.log(this.books)
  }
}
