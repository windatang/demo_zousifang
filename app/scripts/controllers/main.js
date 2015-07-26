'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl',  ['$scope', function ($scope) {
    var data = {
      en:{
        h1_title:"usitrip demo",
        navs:[{
          route:"#",
          name:"Navigation demo"
        },{
          route:"#show",
          name:"display demo"
        },{
          route:"#tab",
          name:"image demo"}],
        language:"中文"
      },
      zh:{
        h1_title:"走四方demo",
        navs:[{
          route:"#",
          name:"导航demo"
        },{
          route:"#show",
          name:"展示demo"
        },{
          route:"#tab",
          name:"美图demo"}],
        language:"English"
      }
    };
    !window.language? window.language = "中文":"";
    $scope.data = data.zh;
    $scope.setLanguage = function() {
        var event = new Event('ex-language');
        event.language = $scope.data.language
        document.dispatchEvent(event);
        $scope.data.language == "English"?$scope.data=data.en:$scope.data=data.zh;
        //window.language = $scope.data.language;

    };
  }]);




