/**
 * Created by winda on 7/25/15.
 */
angular.module('demoApp').directive('tabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: [ "$scope", function($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      }

      this.addPane = function(pane) {
        if (panes.length == 0) $scope.select(pane);
        panes.push(pane);
      }
    }],
    template:
        '<div class="tabbable"><div class="clearfix">' +
        '<ul class="nav nav-tabs clearfix " >' +
        '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
        '<a href="" ng-mouseover="select(pane)">{{pane.title}}</a>' +
        '</li>' +
        '</ul></div>' +
        '<div class="tab-content clearfix" ng-transclude></div>' +
        '</div>',
    replace: true
  };
}).directive('pane', function() {
  return {
    require: '^tabs',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
    replace: true
  };
})
