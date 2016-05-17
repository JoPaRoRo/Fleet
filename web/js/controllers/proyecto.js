/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('ProyectoCtrl', function ($scope, GetSv, PostSv, toaster) {

    $scope.proyecto = {};
    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            toaster.pop('danger', "Error", data.Error);

        } else {
            if (Array.isArray(data)) {
                $scope.listaContratos = data;
            }
        }
    }, function (e) {
        toaster.pop('success', "Exito", "Error fatal");
    });

    $scope.ingresaProyecto = function (proyecto) {
        PostSv.postData("proyectoSv", {nombre: proyecto.nombre, codigo: proyecto.codigo, contrato: proyecto.contrato.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                //$scope.proyecto = {};
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        }
        );


    };
});


