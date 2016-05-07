/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('UsuariosCtrl', function ($scope, GetSv, $rootScope, PostSv) {

    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };


    $scope.usuarios = [];
    $scope.add = false;
    $scope.edit = false;

    $scope.a_editar = {};
    $scope.usuario = {};

    $scope.getUsers = function () {
        GetSv.getData("usuarios").then(function (data) {
            if (data.Error) {
                $scope.error = true;
            } else {
                $scope.usuarios = data;
                $scope.error = false;
            }
        }, function (e) {
            $scope.error = true;
        });
    };

    $scope.getUsers();
    $scope.closeEdit = function () {
        $scope.a_editar = {};
        $scope.edit = false;
    };

    $scope.openEdit = function (item) {
        $scope.a_editar = item;
        $scope.edit = true;
    };

    $scope.closeAdd = function () {
        $scope.add = false;
    };

    $scope.openAdd = function (item) {
        $scope.a_editar = {};
        $scope.add = true;
    };

    $scope.sendUser = function (servlet, user) {
        PostSv.postData(servlet, {usuario: JSON.stringify(user)}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
                $scope.a_editar = {};
                $scope.usuario = {};
                $scope.getUsers();
                $scope.add = false;
                $scope.edit = false;
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        }
        );

    };




    $scope.roles = $rootScope.roles;
});


