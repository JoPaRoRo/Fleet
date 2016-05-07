/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('AccountCtrl', function ($scope, $rootScope, PostSv) {
    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    var aux = $rootScope.user;
    $scope.profile = aux;

    $scope.updateUser = function (profile) {

        PostSv.postData("upUser", {usuario: JSON.stringify(profile)}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                $scope.profile = aux;
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
            $scope.profile = aux;
        }
        );

    };

    $scope.changePass = function (password) {
        password.usuario = $scope.profile.id_usuario;
        PostSv.postData("changePass", password).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        }
        );
    };
});
