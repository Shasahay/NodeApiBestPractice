import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from '../models/book'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
public books : Book[];

constructor(private http : HttpClient) { }

ngOnInit(){
  
}

getProducts():Observable<Book[]>{
  let serviceUrl = 'http://localhost:4201/product';
  return this.http.get<Book[]>(serviceUrl);
}


getCheck():any{
   var testItems = [
     {"Id":1,"Name":"Product1","Description":"This is first product"},
     {"Id":2,"Name":"Product2","Description":"This is second product"},
     {"Id":3,"Name":"Product3","Description":"This is third product"}
    ]

    return testItems;
}

}
