import { Component, OnInit } from '@angular/core';
import {ProductService} from './services/product.service'
import {Book} from './models/book'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'BookDistribution';
  constructor(){}
}
