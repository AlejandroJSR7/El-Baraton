angular
  .module('elBaratonApp')
  .directive('productElement', productDirective);
function productDirective() {
  const directive = {
    templateUrl: 'app/components/product/product.view.html',
    restrict: 'E',
    scope: false
  };
  return directive;
}