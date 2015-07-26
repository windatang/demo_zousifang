'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('NavgationCtrl',  ['$scope',function ($scope) {
      var data = {
        en:{
        h2_title:"Navigation",
        menu_tiitle:"Pop Line",
        continents:[
          {
            contient:"America",
            countries:["美国","加拿大","巴西","阿根廷","墨西哥"],
            class:"mod_subView1"
          },
          {
            contient: "Europe",
            countries: ["德国", "意大利", "法国", "希腊", "英国"],
            class:"mod_subView2"
          },{
            contient: "Asia",
            countries: ["中国", "日本", "韩国", "泰国", "印度","印度尼西亚 "],
            class:"mod_subView3"
          },{
            contient: "Oceania",
            countries: ["澳大利亚", "新西兰"],
            class:"mod_subView4"
          },{
            contient: "Asia",
            countries: ["纳米利亚", "摩纳哥", "南非", "肯尼亚"],
            class:"mod_subView6"
          }]
        },
        zh:{
          h2_title:"导航",
          menu_tiitle:"热门线路",
          continents:[
          {
            contient:"美洲",
            countries:["美国","加拿大","巴西","阿根廷","墨西哥"],
            class:"mod_subView1"
          },
          {
            contient: "欧洲",
            countries: ["德国", "意大利", "法国", "希腊", "英国"],
            class:"mod_subView2"
          },{
            contient: "亚洲",
            countries: ["中国", "日本", "韩国", "泰国", "印度","印度尼西亚 "],
            class:"mod_subView3"
          },{
            contient: "澳洲",
            countries: ["澳大利亚", "新西兰"],
            class:"mod_subView4"
          },{
            contient: "非洲",
            countries: ["纳米利亚", "摩纳哥", "南非", "肯尼亚"],
            class:"mod_subView5"
          }]

        }
      }
      $scope.data  = data.zh;
      document.addEventListener('ex-language', function(ev){
        ev.language == "English"?$scope.data=data.en:$scope.data=data.zh;
      })
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
  }]);
