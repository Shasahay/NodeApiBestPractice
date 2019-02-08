"use strict";
exports.__esModule = true;
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.getAllProducts = function () {
        var Products = [{ Id: 1, Name: 'Product1', Description: 'This is first product' },
            { Id: 2, Name: 'Product2', Description: 'This is second product' },
            { Id: 3, Name: 'Product3', Description: 'This is third product' }
        ];
        return Products;
    };
    return ProductController;
}());
exports.ProductController = ProductController;
