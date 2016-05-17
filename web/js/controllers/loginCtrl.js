'use strict';

angular.module('MetronicApp').controller('LoginCtrl', function ($scope,loginService) {
	$scope.msgtxt='';
        $scope.entrando = false;
	$scope.login=function(data){
                $scope.entrando = true;
		loginService.login(data,$scope); //call login service
	};
});