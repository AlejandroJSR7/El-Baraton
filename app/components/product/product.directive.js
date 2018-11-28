angular
    .module('elBaratonApp')
    .directive('productElement', productDirective);
function productDirective() {
    var directive = {
        controller: 'ProductsController',
        controllerAs: 'productsVM',
        templateUrl: 'app/components/product/product.view.html',
        restrict: 'E',
        scope: {
            product: '='
        }
    };
    return directive;
}