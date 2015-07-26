'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular.module('demoApp', [
      'ngRoute'
  ]).config(['$routeProvider',function (a) {
    a.when('/', {
        templateUrl: 'views/navigation.html',
        controller: 'NavgationCtrl'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .when('/tab', {
          templateUrl: 'views/tab.html',
          controller: 'TabCtrl'
      })
  }]);
