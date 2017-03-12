(function () {
  'use strict';

  angular
    .module('swiftkind')
    .constant('API_URL', '/api/landing/')
    .service('LandingService', LandingService)
  ;

  /* LANDING PAGE SERVICES
   * @desc : services for landing page
   */
  function LandingService ($http, API_URL) {

    var services = {
      headers  : [],
      stacks   : [],
      projects : [],
      inquire  : sendMessage
    };

    getHeaders();
    getStacks();
    getProjects();

    return services;

    function getHeaders () {
      return $http.get(API_URL + 'headers/').then(function (resp) {
        services.headers = resp.data;
      });
    };

    function getStacks () {
      return $http.get(API_URL + 'stacks/').then(function (resp) {
        services.stacks = resp.data;
      });
    };

    function getProjects () {
      return $http.get(API_URL + 'projects/').then(function (resp) {
        services.projects = resp.data;
      });
    };

    function sendMessage (form) {
      return $http.post(API_URL + 'message/send/');
    };

  };


})();