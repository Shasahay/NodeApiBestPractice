"use strict";
exports.__esModule = true;
var express = require("express");
var product_controller_1 = require("../controller/product-controller");
exports.route = express.Router();
exports.productRoute = exports.route;
var _prodController = new product_controller_1.ProductController();
exports.route.get('/', function (req, res) {
    res.send(_prodController.getAllProducts());
});
exports.route.get('/products', function (req, res) {
    res.send('Hello From Produc route');
});
