/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('UsuariosCtrl', function ($scope, GetSv, $rootScope, PostSv,toaster) {

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
                toaster.pop('error', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                $scope.a_editar = {};
                $scope.usuario = {};
                $scope.getUsers();
                $scope.add = false;
                $scope.edit = false;
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        }
        );

    };


    $scope.roles = $rootScope.roles;
});


