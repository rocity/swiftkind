(function (){
  angular
    .module('swiftkind')
    .directive('contactPage', function(TEMPLATE_URL){
        return {
          restrict: 'E',
          scope: {
              info: '='
          },
          templateUrl: TEMPLATE_URL + 'contact.html'
        };
      })
      .directive('navBar', function(TEMPLATE_URL){
        return{
          restrict: 'E',
          scope: {
            info: '='
          },
          templateUrl: TEMPLATE_URL + 'nav.html'
        };
      })
    ;
})();