/**
 * Created by Jos�Pablo on 10/28/2015.
 */
var app = angular.module('MetronicApp');
app.controller('InsumosCtrl', function ($scope, $http, GetSv, PostSv, XLSXReaderService, $rootScope,toaster) {

    $scope.insumosBySerie = [];

    $scope.mantenimientoCo = {tipo: "Correctivo", estado: 0};

    $scope.open = function (equipo) {
        $scope.insumosBySerie = [];
        $scope.insumosBySerie = $scope.listaCorrectivos.filter(function (x) {
            return x.Numero_de_serie === equipo;
        });

        $scope.mantenimientoCo.Montacargas = equipo;
        console.log($scope.insumosBySerie);
    };

    $scope.tablaInsumoBySerie = {};


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
            toaster.pop('error', "Error", data.Error);
        } else {
            if (Array.isArray(data))
                $scope.listaContratos = data;
        }
    }, function (e) {
        toaster.pop('error', "Error", "Error fatal");
    });

    $scope.filtraProyectos = function (contrato) {
        GetSv.getDataParam("proyecCont", {contrato: contrato.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);

            } else {
                if (Array.isArray(data)) {
                    $scope.listaProyectos = data;

                }
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        });
    };

    $scope.filtraEquipos = function (proyecto) {
        GetSv.getDataParam("monProyec", {proyecto: proyecto.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaMontacargas = data;
                }
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
        });
    };

    $scope.registrarGastoE = function (gastoE) {
        PostSv.postData("regGasto", {gastoE: JSON.stringify(gastoE)}).then(function (data) {
            if (data.Error) {
                toaster.pop('error', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
                $scope.gastoE = {};
            }
        }, function (e) {
            toaster.pop('error', "Error", "Error fatal");
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
                    console.log("datos");
                    console.log(data);
                    if (data.Error) {
                        toaster.pop('error', "Error", data.Error);
                    } else {
                        $scope.listaCorrectivos = data;
                        crearJsonAuxiliares(data);
                        $scope.mostrarTabla = true;
                        $rootScope.getAlerts();
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

    $scope.cancel = function () {
        $scope.mantenimientoCo.insumos = [];
    };

    $scope.ok = function () {
        PostSv.postData('SvInsCorrectivo', {"mantenimiento": JSON.stringify($scope.mantenimientoCo)}).then(function (data) {
            if (data.Error) {
               toaster.pop('error', "Error", data.Error);
            } else {
                toaster.pop('success', "Exito", data.Exito);
            }
        }, function (e) {
            toaster.pop('success', "Exito", "Error fatal");
        });
    };


    $scope.today = function () {
        $scope.mantenimientoCo.fecha_mantenimiento = new Date();
    };

    $scope.today();

    $scope.clear = function () {
        $scope.mantenimientoCo.fecha_mantenimiento = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yyyy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
                mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.openDate = function ($event) {
        if ($scope.popup1.opened === true)
            $scope.popup1.opened = false;
        else
            $scope.popup1.opened = true;
        $event.preventDefault();
        $event.stopPropagation();
    };

    $scope.setDate = function (year, month, day) {
        $scope.mantenimientoCo.fecha_mantenimiento = new Date(year, month, day);
    };

    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['d!/M!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
                mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

});
