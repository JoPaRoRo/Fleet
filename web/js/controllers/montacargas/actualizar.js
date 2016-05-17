/* global MetronicApp */

/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('ActualizarCtrl', function ($scope, GetSv, PostSv, toaster) {

    GetSv.getData("consultaMont").then(function (data) {
        if (data.Error) {
            toaster.pop('danger', "Error", data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaEquipos = data;
            }
        }
    }, function (e) {
        toaster.pop('danger', "Error", "Error fatal");
    });

    $scope.buscaEquipo = function (serie) {

        GetSv.getDataParam("getBySerie", {numero_serie: serie}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                $scope.equipo = data;
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        });

    };

    $scope.actualizaEquipo = function (equipo) {
        PostSv.postData('updMontacargas', {montacargas: JSON.stringify(equipo)}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        }
        );


    };
});