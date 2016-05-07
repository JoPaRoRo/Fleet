/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('AdministracionCtrl', function ($scope, GetSv, PostSv) {
    $scope.horimetro = {}; //Este es el objeto del form.[{"nombre":"Femsa"},{"nombre":"Dos Pinos"},{"nombre":"Florida"},{"nombre":"Me
    $scope.alerts = [];
    $scope.viejo = {};
    $scope.admi = {};
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.filtraProyectos = function (contrato, b) {

        GetSv.getDataParam("proyecCont", {contrato: contrato.codigo}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
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
            $scope.alerts.push({type: "danger", msg: e});
            console.log(e);
        });
    };



    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            console.log(data.Error);
        } else {
            if (Array.isArray(data))
                $scope.listaContratos = data;
            console.log(data);
        }
    }, function (e) {
        console.log("Error desconocido");
    });

    $scope.filtraEquipos = function (proyecto) {
        GetSv.getDataParam("monProyec", {proyecto: proyecto.codigo}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaMontacargas = data;
                    console.log(data);
                }
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: e});
            console.log(e);
        });
    };

    $scope.mueveMontacargas = function (admi) {
        PostSv.postData("muevMont", {montacargas: admi.montacargas.numero_serie, proyecto: admi.proyecto.codigo, }).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
                $scope.viejo = {};
                $scope.admi = {};
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error interno"});
        }
        );
    };



});