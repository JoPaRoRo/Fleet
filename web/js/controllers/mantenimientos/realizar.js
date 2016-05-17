/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('RealizarCtrl', function ($scope, GetSv, PostSv, $rootScope, toaster) {
    $scope.alertMant = [];
    $scope.getMontMan = function () {
        GetSv.getData("AlertasManSv").then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.alertMant = data;
                }
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        });
    };
    $scope.getMontMan();
    $scope.realizar = function (alertM) {
        PostSv.postData("realizar", {alerta: JSON.stringify(alertM)}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                $scope.getMontMan();
                $rootScope.getAlerts();
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        }
        );
    };

    $scope.ban = function () {
        return $scope.alertMant.length > 0;
    };
});


