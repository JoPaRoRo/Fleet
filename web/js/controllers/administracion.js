/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('AdministracionCtrl', function ($scope, GetSv, PostSv, toaster) {
    $scope.horimetro = {};
    $scope.viejo = {};
    $scope.admi = {};

    $scope.filtraProyectos = function (contrato, b) {

        GetSv.getDataParam("proyecCont", {contrato: contrato.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    if (b === true) {
                        $scope.listaProyectos = data;
                    } else {
                        $scope.listaProyectos2 = data;
                    }
                }
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        });
    };



    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            toaster.pop('danger', "Error", data.Error);
        } else {
            if (Array.isArray(data))
                $scope.listaContratos = data;
        }
    }, function (e) {
        console.log("Error desconocido");
    });

    $scope.filtraEquipos = function (proyecto) {
        GetSv.getDataParam("monProyec", {proyecto: proyecto.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaMontacargas = data;
                }
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        });
    };

    $scope.mueveMontacargas = function (admi) {
        PostSv.postData("muevMont", {montacargas: admi.montacargas.numero_serie, proyecto: admi.proyecto.codigo, }).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                $scope.viejo = {};
                $scope.admi = {};
            }
        }, function (e) {
           toaster.pop('danger', "Error", "Error fatal");
        }
        );
    };



});