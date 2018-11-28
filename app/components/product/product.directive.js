angular
  .module('elBaratonApp')
  .directive('productElement', productDirective);
function productDirective() {
  var directive = {
    templateUrl: 'app/components/product/product.view.html',
    restrict: 'E',
    scope: false
  };
  return directive;
}