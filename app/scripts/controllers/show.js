'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('ShowCtrl',  ['$scope',function ($scope) {
      var data = {
        en:{
          h2_title:"show time",
          lab_title:"Image display",
          locations:[{
            location:"USA",
            layout: "layout4",
            show_list:[
              [{src:"",height:"",width:"",describe:"风景1",content:"",title:"",grow:1}],
              [{src:"",height:"",width:"",describe:"风景2",content:"",title:"",grow:1},{src:"",height:"",width:"",describe:"",content:"",title:"",grow:2}],
              [{src:"",height:"",width:"",describe:"风景3",content:"",title:"",grow:2},{src:"",height:"",width:"",describe:"",content:"",title:"",grow:1}],
              [{src:"",height:"",width:"",describe:"风景4",content:"",title:"",grow:1}]
            ]
          }]
        },
        zh:{
          h2_title:"展示",
          lab_title:"精彩玩乐",
          locations:[{
            location:"美国",
            layout: "layout4",
            show_list:[
              [{src:"../images/autumn_season-1600x900.jpg",height:"620",width:"",describe:"风景1",content:"",title:"",grow:1}],
              [{src:"../images/autumn_season-1600x900.jpg",height:"200",width:"",describe:"风景2",content:"",title:"",grow:1},{src:"../images/autumn_season-1600x900.jpg",height:"400",width:"",describe:"风景1",content:"",title:"",grow:2}],
              [{src:"../images/autumn_season-1600x900.jpg",height:"400",width:"",describe:"风景3",content:"",title:"",grow:2},{src:"../images/autumn_season-1600x900.jpg",height:"200",width:"",describe:"风景2",content:"",title:"",grow:1}],
              [{src:"../images/autumn_season-1600x900.jpg",height:"620",width:"",describe:"风景4",content:"",title:"",grow:1}]
            ]
          },{
            location:"加拿大",
            layout: "layout3",
            show_list:[
              [{src:"../images/yeoman.png",height:"620",width:"",describe:"风景1",content:"",title:"",grow:1}],
              [{src:"../images/yeoman.png",height:"300",width:"",describe:"风景2",content:"",title:"",grow:1},{src:"../images/yeoman.png",height:"300",width:"",describe:"风景1",content:"",title:"",grow:2}],
              [{src:"../images/yeoman.png",height:"620",width:"",describe:"风景3",content:"",title:"",grow:1}]
            ]
          },{
            location:"美国",
            layout: "layout4",
            show_list:[
              [{src:"../images/autumn_season-1600x900.jpg",height:"620",width:"",describe:"风景1",content:"",title:"",grow:1}],
              [{src:"../images/autumn_season-1600x900.jpg",height:"200",width:"",describe:"风景2",content:"",title:"",grow:1},{src:"../images/autumn_season-1600x900.jpg",height:"400",width:"",describe:"风景1",content:"",title:"",grow:2}],
              [{src:"../images/autumn_season-1600x900.jpg",height:"400",width:"",describe:"风景3",content:"",title:"",grow:2},{src:"../images/autumn_season-1600x900.jpg",height:"200",width:"",describe:"风景2",content:"",title:"",grow:1}],
              [{src:"../images/autumn_season-1600x900.jpg",height:"620",width:"",describe:"风景4",content:"",title:"",grow:1}]
            ]
          },{
            location:"加拿大",
            layout: "layout3",
            show_list:[
              [{src:"../images/yeoman.png",height:"620",width:"",describe:"风景1",content:"",title:"",grow:1}],
              [{src:"../images/yeoman.png",height:"300",width:"",describe:"风景2",content:"",title:"",grow:1},{src:"../images/yeoman.png",height:"300",width:"",describe:"风景1",content:"",title:"",grow:2}],
              [{src:"../images/yeoman.png",height:"620",width:"",describe:"风景3",content:"",title:"",grow:1}]

            ]
          }]
        }
      }
    $scope.data = data.zh;
//    document.addEventListener('ex-language', function(ev){
//      ev.language == "English"?$scope.data=data.en:$scope.data=data.zh;
//    })
  }])
