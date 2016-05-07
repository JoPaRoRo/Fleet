/* global MetronicApp */

/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('ActualizarCtrl', function ($scope, GetSv,PostSv) {
    $scope.alerts = [];
    $scope.closeAlert = function (index) {

        $scope.alerts.splice(index, 1);
    };
    GetSv.getData("consultaMont").then(function (data) {
        if (data.Error) {
            $scope.alerts.push({type: "danger", msg: data.Error});
            console.log(data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaEquipos = data;
                console.log(data);
            }
        }
    }, function (e) {
        $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        console.log(e);
    });

    $scope.buscaEquipo = function (serie) {

        GetSv.getDataParam("getBySerie", {numero_serie: serie}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.equipo = data;
                console.log(data);
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: e});
            console.log(e);
        });

    };
    
    $scope.actualizaEquipo = function(equipo){
             PostSv.postData('updMontacargas',{montacargas:JSON.stringify(equipo)}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        }
        );


    };
});