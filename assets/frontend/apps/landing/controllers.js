(function () {
  'use strict';

  angular
    .module('swiftkind')
    .controller('LandingController', LandingController)
    .controller('ContactController', ContactController)
    .controller('NavController', NavController)
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

      $scope.message_sent = false;
      $scope.message_failed = false;

      LandingService.inquire(form).then(function (resp) {
        if (resp.status == 200) {
          $scope.form = null;
          $scope.message_sent = true;
        } else {
          $scope.message_failed = true;
        };

      });
    };

  };

  /* NAV CONTROLLER
   * @desc : main controller for the nav
   */
  function NavController ($scope) {
    var self = this;

    self.contactOpen = false;
    self.menuOpen = false;

    self.triggerContact = function(){

      var contact = self.contactOpen;
      var menu = self.menuOpen;

      if (!contact || menu) {

        var pageElement = angular.element('#page-wrapper');
        pageElement.addClass('open');
        var contentElement = angular.element('.content-wrapper');
        contentElement.addClass('left-open');
        var hamburger = angular.element('.hamburger');
        hamburger.addClass('open');
        var slide = angular.element('.slideInDown');
        slide.addClass('open');

        self.contactOpen = true;
        self.menuOpen = true;

      };
    };

    self.triggerMenu = function(){

      var contact = self.contactOpen;
      var menu = self.menuOpen;

      if (contact || menu) {

        var pageElement = angular.element('#page-wrapper');
        pageElement.removeClass('open');
        var contentElement = angular.element('.content-wrapper');
        contentElement.removeClass('left-open');
        self.contactOpen = false;
        self.menuOpen = false;

      } else if (!menu) {

        var contentElement = angular.element('.content-wrapper');
        contentElement.addClass('left-open');
        self.menuOpen = true;

      };
    };

  };

})();
