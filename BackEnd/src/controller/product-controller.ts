import {Product} from '../model/product'

export class ProductController{
    Products : Product[];
    
constructor(){}

public getAllProducts(): Product[] {
    
    let Products : Product[] =  [{ Id:1, Name:'Product1',Description:'This is first product'},
                                    { Id:2, Name:'Product2',Description:'This is second product'},
                                    { Id:3, Name:'Product3',Description:'This is third product'}
                                ]

    return Products

}
 
}