import * as express from 'express';
import {userRoute} from './src/routes/user-route'
import {productRoute} from './src/routes/product-route'

const app = express()

// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

// A default hello word route

app.use('/', userRoute);
 app.use('/product', productRoute);

// start our server on port 4201
app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});