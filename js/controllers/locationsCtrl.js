angular.module('devmtnTravel')
.controller('locationCtrl', function($scope, mainSrv){
  $scope.travelInfo = mainSrv.travelInfo;
});
