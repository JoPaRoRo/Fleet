angular.module('MetronicApp').controller('AgregarCtrl', function ($scope, PostSv,toaster) {
    $scope.montacargas = {};
    $scope.submitForm = function (isValid,m) {
        if (isValid) {
           $scope.agregar(m);
        }
    };
    $scope.agregar = function () {
        PostSv.postData('SVIngresarMontacargas', {montacargas: JSON.stringify($scope.montacargas)}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Exito", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                
            }
        }, function (e) {
            toaster.pop('success', "Exito", "Error fatal");
        }
        );
    };
});