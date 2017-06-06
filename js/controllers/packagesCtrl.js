angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, mainSrv, $state){
  $scope.packages = [];
  var packages = mainSrv.packageInfo;
  if($state.params.country){
    for(i = 0; i < packages.length; ++i)
    {
      if(packages[i].country === $state.params.country){
        $scope.packages.push(packages[i]);
      }
    }
  }
  else {
    $scope.packages = packages;
  }
});
