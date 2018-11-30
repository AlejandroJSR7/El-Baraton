angular
  .module('elBaratonApp')
  .directive('productElement', productDirective);
function productDirective() {
  const directive = {
    templateUrl: 'components/product/product.view.html',
    restrict: 'E',
    scope: false
  };
  return directive;
}