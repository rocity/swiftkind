(function () {
  'use strict';

  angular
    .module('swiftkind', [
      'ui.router',
      'ngAnimate',
      'ngSanitize',
      'ui.bootstrap',
      'ngFileUpload',
    ])
    .config(csrf)
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