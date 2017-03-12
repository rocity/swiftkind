(function () {
  'use strict';

  angular
    .module('swiftkind', [
      'ui.router',
      'ui.bootstrap',
    ])
    .constant('TEMPLATE_URL', "/static/frontend/templates/")
  ;

  /* CSRF TOKEN
     * @desc : allow the frontend to send post request to
     *         the server.
     */
  function csrf($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  };

})();