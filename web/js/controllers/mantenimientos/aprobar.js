/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('AprobarCtrl', function ($scope, GetSv, PostSv, $rootScope, toaster) {
    $scope.listaMant = [];

    $scope.getMontMan = function () {
        GetSv.getData("MontacargasMantSV").then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaMant = data;
                }
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        });
    };

    $scope.getMontMan();

    $scope.aprobar = function (list) {
        PostSv.postData("ActualizaEstadoSv", {montacargas: list.numero_serie}).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                $scope.getMontMan();
                $rootScope.getAlerts();
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        }
        );
    };

    $scope.ban = function () {
        return $scope.listaMant.length > 0;
    };

});


