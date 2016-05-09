/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('MetronicApp').controller('AprobarCtrl', function ($scope, GetSv, PostSv,$rootScope) {
    $scope.alerts = [];
    $scope.listaMant = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    
    
    
    $scope. getMontMan = function(){
    GetSv.getData("MontacargasMantSV").then(function (data) {
        if (data.Error) {
            $scope.alerts.push({type: "danger", msg: data.Error});
            console.log(data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaMant = data;
                console.log(data);
            }
        }
    }, function (e) {
        $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        console.log(e);
    });
};

$scope.getMontMan();
    
    $scope.aprobar = function (list) {
        PostSv.postData("ActualizaEstadoSv", {montacargas: list.numero_serie}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
                $scope.getMontMan();
                $rootScope.getAlerts();
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error interno"});
        }
        );
    };
    
    $scope.ban = function(){
        return $scope.listaMant.length > 0;
    }

});


