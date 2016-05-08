/**
 * Created by Jos�Pablo on 10/28/2015.
 */
var app = angular.module('MetronicApp');
app.controller('InsumosCtrl', function ($scope, $http, $uibModal,GetSv, PostSv, XLSXReaderService) {

    $scope.alerts = [];
    $scope.closeAlert = function (index) {

        $scope.alerts.splice(index, 1);
    };
    
    $scope.insumosBySerie = [];

    $scope.open = function (equipo) {
        
        $scope.insumosBySerie = $scope.listaCorrectivos.filter(function(x){
            console.log(x);
            return x.Numero_de_serie === equipo;
        });
        
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal.html',
            controller: 'ModalController',
            size: 'lg',
            resolve: {
                InsumosBySerie: function () {
                    return $scope.insumosBySerie;
                }
            }
        });

   };


    $scope.mostrarTabla = false;
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
                        crearJsonAuxiliares(data);
                        $scope.mostrarTabla = true;
                    }
                });
    };

    var crearJsonAuxiliares = function (data) {
        $scope.jsonModelos = data.reduce(function (z, s) {
            if (!z.includes(s.Numero_de_serie)) {
                z = z.concat(s.Numero_de_serie);
            }
            return z;
        }, []);
    };


})
app.controller('ModalController', function ($scope, $uibModalInstance, InsumosBySerie) {
    $scope.insumosBySerie = InsumosBySerie;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function (param)
    {
        console.log(param);
    };



});