"use strict";
exports.__esModule = true;
var express = require("express");
exports.route = express.Router();
exports.userRoute = exports.route;
exports.route.get('/', function (req, res) {
    res.send("Hello From User route");
});
exports.route.get('/users', function (req, res) {
    res.send("Get the list of users");
});
