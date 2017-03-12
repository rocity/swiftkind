(function () {
  'use strict';

  angular
    .module('swiftkind')
    .controller('LandingController', LandingController)
    .controller('ContactController', ContactController)
  ;


  /* LANDING PAGE CONTROLLER
   * @desc : main controller for the landing page
   */
  function LandingController ($scope, LandingService) {
    var self = this;

    $scope.LandingService = LandingService;

  };

  /* CONTACT US PAGE CONTROLLER
   * @desc : controller for sending inquiry
   */
  function ContactController ($scope, LandingService) {
    var self = this;

    self.sendMessage = function (form) {
      LandingService.inquire(form).then(function (resp) {
        console.log(resp.status_code);
      });
    };

  };

})();