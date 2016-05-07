/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('HomeCtrl',function ($scope, GetSv) {

        $scope.alerts = [];
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.datos = {};

        $scope.getDatos = function () {
            GetSv.getData("HomeSv").then(function (data) {
                console.log(data);
                if (data.Error) {
                    $scope.alerts.push({type: "danger", msg: data.Error});
                } else {
                    $scope.datos = data;
                }
            }, function (e) {
                $scope.alerts.push({type: "danger", msg: e});
            });
        };

        $scope.getDatos();

        $scope.promedioMontacargas = function () {
            return (($scope.datos.total_montacargas_mantenimiento / $scope.datos.total_montacargas) * 100).toFixed(2);
        };

    });