/* global MetronicApp */

/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('ConsultarCtrl', function ($scope, GetSv, toaster) {
    GetSv.getData("consultaMont").then(function (data) {
        if (data.Error) {
            toaster.pop('error', "Error", data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaEquipos = data;
            }
        }
    }, function (e) {
        toaster.pop('error', "Error", "Error fatal");
    });

    $scope.buscaEquipo = function (serie) {

        GetSv.getDataParam("getBySerie", {numero_serie: serie}).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
            } else {
                $scope.equipo = data;
                $scope.equipo.mantenimientos.forEach(function (x) {
                    x.isOpened = false;
                });
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        });

    };

    $scope.getInsumos = function (mantenimiento) {
        if (!mantenimiento.insumos) {
            GetSv.getDataParam('insumos_man', {mantenimiento: mantenimiento.id}).then(function (data) {
                if (!data.Error) {
                    mantenimiento.insumos = data;
                } else {
                    toaster.pop('error', "Error", data.Error);
                }
            }, function (e) {
                toaster.pop('error', "Error",  "Error fatal");
            });
        }
    };


});