angular.module('MetronicApp').controller('AgregarCtrl', function ($scope, PostSv) {
    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    $scope.montacargas = {};
    $scope.submitForm = function (isValid,m) {
        if (isValid) {
           $scope.agregar(m);
        }
    };
    $scope.agregar = function () {
        PostSv.postData('SVIngresarMontacargas', {montacargas: JSON.stringify($scope.montacargas)}).then(function (data) {
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