'use strict';

angular.module('MetronicApp').controller('LoginCtrl', function ($scope,loginService) {
	$scope.msgtxt='';
	$scope.login=function(data){
		loginService.login(data,$scope); //call login service
	};
});