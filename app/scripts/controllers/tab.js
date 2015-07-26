'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('TabCtrl', ['$scope', function ($scope) {
      var data = {
        en:{
          h2_title:"show time",
          lab_title:"Image display",
          locations:[{
            location:"USA",
            layout: "layout4",
            show_list:[
              [{src:"",height:"",width:"",describe:"",content:"",title:"",grow:1}],
              [{src:"",height:"",width:"",describe:"",content:"",title:"",grow:1},{src:"",height:"",width:"",describe:"",content:"",title:"",grow:2}],
              [{src:"",height:"",width:"",describe:"",content:"",title:"",grow:2},{src:"",height:"",width:"",describe:"",content:"",title:"",grow:1}],
              [{src:"",height:"",width:"",describe:"",content:"",title:"",grow:1}]
            ]
          }]
        },
        zh:{
          h2_title:"美图展示",
          lab_title:"精彩玩乐",
          locations:[{
            location:"空中观光",
            show_list:[
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"200",describe:"内容",content:"",title:"",grow:1}
            ]
          },{
            location:"水上运动",
            show_list:[
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1}
            ]
          },{
            location:"空中观光",
            show_list:[
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1}
            ]
          },{
            location:"水上运动",
            show_list:[
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1},
              {src:"../images/autumn_season-1600x900.jpg",height:"100",width:"150",describe:"",content:"",title:"",grow:1}
            ]
          }]
        }
      }
      $scope.data = data.zh;

    }])
