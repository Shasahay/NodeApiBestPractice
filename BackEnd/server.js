"use strict";
exports.__esModule = true;
var express = require("express");
var user_route_1 = require("./src/routes/user-route");
var product_route_1 = require("./src/routes/product-route");
var app = express();
// Allow any method from any host and log requests
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        console.log(req.ip + " " + req.method + " " + req.url);
        next();
    }
});
// A default hello word route
app.use('/', user_route_1.userRoute);
app.use('/product', product_route_1.productRoute);
// start our server on port 4201
app.listen(4201, '127.0.0.1', function () {
    console.log("Server now listening on 4201");
});
