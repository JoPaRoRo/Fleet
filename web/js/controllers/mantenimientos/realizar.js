/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('RealizarCtrl', function ($scope, GetSv, PostSv) {
    $scope.aler = [];
    $scope.closeAlert = function (index) {
        $scope.aler.splice(index, 1);
    };
    GetSv.getData("AlertasManSv").then(function (data) {
        if (data.Error) {
            $scope.aler.push({type: "danger", msg: data.Error});
            console.log(data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.alertMant = data;
                console.log(data);
            }
        }
    }, function (e) {
        $scope.aler.push({type: "danger", msg: "Error desconocido"});
        console.log(e);
    });
    $scope.actEstado1 = function (alertM) {
        PostSv.postData("ActualizaSv", {montacargas: alertM.montacargas}).then(function (data) {
            if (data.Error) {
                $scope.aler.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.aler.push({type: "success", msg: data.Exito});
            }
        }, function (e) {
            $scope.aler.push({type: "danger", msg: "Error interno"});
        }
        );
    };
    $scope.deleteAlert = function (alertM) {
        PostSv.postData("DeleteAlertSv", {consecutivo: alertM.consecutivo}).then(function (data) {
            if (data.Error) {
                $scope.aler.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.aler.push({type: "success", msg: data.Exito});
            }
        }, function (e) {
            $scope.aler.push({type: "danger", msg: "Error interno"});
        }
        );
    };
});


