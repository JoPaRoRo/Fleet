/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('ProyectoCtrl', function ($scope, GetSv,PostSv) {

    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    
    $scope.proyecto = {};
    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            $scope.alerts.push({type: "danger", msg: data.Error});
          
        } else {
            if (Array.isArray(data)) {
                $scope.listaContratos = data;
               
            }
        }
    }, function (e) {
        $scope.alerts.push({type: "danger", msg: e});
        console.log("Error desconocido");
    });
    
      $scope.ingresaProyecto = function (proyecto) {
        PostSv.postData("proyectoSv", {nombre:proyecto.nombre,codigo:proyecto.codigo,contrato:proyecto.contrato.codigo}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
                //$scope.proyecto = {};
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        }
        );

       
    };
});


