import * as express from 'express'
import {ProductController} from '../controller/product-controller'


export const route = express.Router();
const _prodController = new ProductController();

export {route as productRoute}

route.get('/', (req, res) =>{
     res.send(_prodController.getAllProducts());
})

route.get('/products', (req, res) =>{
    res.send('Hello From Produc route')
})