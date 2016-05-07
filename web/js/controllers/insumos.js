/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('InsumosCtrl', function ($scope, $http, GetSv, PostSv, XLSXReaderService) {

    $scope.alerts = [];
    $scope.closeAlert = function (index) {

        $scope.alerts.splice(index, 1);
    };
    
    $scope.mostrarTabla = false;
    $scope.insumos = [{nombre: "Aceite", cantidad: 5, costo: "170,000"}, {nombre: "LLantas", cantidad: 4, costo: "140,000"}, {nombre: "Cabezote", cantidad: 3, costo: "70,000"}
        , {nombre: "Carburador", cantidad: 1, costo: "570,000"}, {nombre: "Uña", cantidad: 1, costo: "800,000"}];
    $scope.contrato = {};


    $scope.gastoE = {};
    GetSv.getData("data/tipoGastos.json")
            .then(function (data) {
                $scope.listaTipos = data;
            }, function (e) {
                console.log(e);
            });

    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            console.log(data.Error);
        } else {
            if (Array.isArray(data))
                $scope.listaContratos = data;
            console.log(data);
        }
    }, function (e) {
        console.log("Error desconocido");
    });

    $scope.filtraProyectos = function (contrato) {
        GetSv.getDataParam("proyecCont", {contrato: contrato.codigo}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaProyectos = data;
                    console.log(data);
                }
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: e});
            console.log(e);
        });
    };

    $scope.filtraEquipos = function (proyecto) {
        GetSv.getDataParam("monProyec", {proyecto: proyecto.codigo}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaMontacargas = data;
                    console.log(data);
                }
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: e});
            console.log(e);
        });
    };

    $scope.registrarGastoE = function (gastoE) {
        PostSv.postData("regGasto", {gastoE: JSON.stringify(gastoE)}).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
                $scope.gastoE = {};
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        });
    };

    $scope.fileChanged = function (files) {
        $scope.sheets = [];
        $scope.excelFile = files[0];
        XLSXReaderService.readFile($scope.excelFile, $scope.showPreview).then(function (xlsxData) {
            if (xlsxData.sheets.Consulta) {
                 $scope.enviarObjeto(xlsxData.sheets.Consulta);
            }
        });
    };

    $scope.showPreviewChanged = function () {
        if ($scope.showPreview) {
            XLSXReaderService.readFile($scope.excelFile, $scope.showPreview).then(function (xlsxData) {
                $scope.sheets = xlsxData.sheets;
            });
        }
        ;
    };

    $scope.enviarObjeto = function (data) {
        PostSv.postData("svOt", {insumos: JSON.stringify(data)})
                .then(function (data) {
                     console.log(data);
                    if (data.Error) {
                        $scope.alerts.push({type: "danger", msg: data.Error});
                    } else {                       
                        $scope.listaCorrectivos = data;
                         $scope.mostrarTabla = true;
                    }
                });
    };

});