/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('AccountCtrl', function ($scope, $rootScope, PostSv, toaster) {
    var aux = $rootScope.user;
    $scope.profile = aux;

    $scope.updateUser = function (profile) {

        PostSv.postData("upUser", {usuario: JSON.stringify(profile)}).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
                $scope.profile = aux;
            } else {
                toaster.pop('success', "Exito", data.Exito);
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
            $scope.profile = aux;
        }
        );

    };

    $scope.changePass = function (password) {
        password.usuario = $scope.profile.id_usuario;
        PostSv.postData("changePass", password).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        }
        );
    };
});
