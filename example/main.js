'use strict';

angular.module('perfectScrollAngularApp')
  
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.dummies = [1,2,3];
    
    
    var i=4;
    
    $scope.increaseDummyText  = function(){
        for(var j=0 ; j < 3; j++){
          $scope.dummies.push(i++);  
        }
        
    };
        
      
  });
