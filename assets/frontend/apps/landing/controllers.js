(function () {
  'use strict';

  angular
    .module('swiftkind')
    .controller('LandingController', LandingController)
    .controller('ContactController', ContactController)
    .controller('NavController', NavController)
    .controller('CareersController', CareersController)
  ;


  /* LANDING PAGE CONTROLLER
   * @desc : main controller for the landing page
   */
  function LandingController ($scope, LandingService) {
    var self = this;

    $scope.LandingService = LandingService;
  };

  /* CAREER PAGE CONTROLLER
   * @desc : controller for applicant upload cv
  */
  function CareersController($scope, LandingService, Upload, $timeout) {
    var self = this;

    self.oneAtATime = true;
    $scope.isCustomHeaderOpen = false,
    $scope.status = {
      isFirstOpen: false,
      isFirstDisabled: false,
    }

    $scope.change = false;
    $scope.uploadSuccess = false;
    $scope.uploadCv = function(form){
      $scope.uploading = true;
      $scope.change = false;
      LandingService.uploadCV(form).then(function(resp){
        $scope.form = {}; // reset form
        $timeout(function() {
            $scope.uploading = false;
            $scope.uploadSuccess = true;
        }, 3000); 
      });
    };


    $scope.cancelUpload = function(){
      $scope.form = {};
      $scope.change = false;

    }
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
  function NavController ($scope, $state, $timeout) {
    var self = this;

    self.contactOpen = false;
    self.menuOpen = false;

    self.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
      };

    $scope.goTo = function(data) {
      $state.go('landing'); // return landing page

      $timeout(function() {
        self.scrollTo(data);
      }, 300); 

    };

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
