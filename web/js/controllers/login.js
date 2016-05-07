/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   
angular.module('MetronicApp').controller('LoginCtrl',function($scope, LoginSv, $state, $rootScope){
    $scope.usuario = {}; //Este es el objeto del form.
    $scope.validarUsuario = function (usuario){
        LoginSv.validateLogin(usuario).then(function(data){
                if(data.Error ){
                    alert(data.Error);
            }
            else{
                console.log(data);
                $rootScope.user = data;
                $state.go("main.home");
            }
        }, function(e){
            alert("Error Desconocido !!!! "+ e);
        });
    };
});

