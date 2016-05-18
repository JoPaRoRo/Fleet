/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('MetronicApp').controller('MainCtrl', function ($scope, $rootScope, GetSv, loginService) {
    GetSv.getData("alerts").then(function (data) {
        if (data.Error) {
            $rootScope.alerts = [{montacargas: "ERROR", descripcion: "Se presento un error al cargar las alertas", tipo: '"alertaR"', fecha: "ahora"}];
        } else {
            if (Array.isArray(data)) {
                $rootScope.alerts = data;
            }
        }
    }, function (e) {
        $rootScope.alerts = [{titulo: "ERROR", msg: "Se presento un error al cargar las alertas", warning: '"alertaR"', time: "ahora"}];
    });


    $scope.confirmationSettings = {
        title: "Confirmacion",
        message: "¿Seguro que desea enviar la información?",
        confirmText: "Enviar",
        cancelText: "Cancelar",
        placement: "bottom"
    };
    
    loginService.getUser();
});
