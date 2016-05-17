/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('ReportesCtrl', function ($scope, GetSv, $state, toaster) {

    $scope.reporte = {tipo: 1};
    $scope.reporte_det = {tipo: 1};
    $scope.tabla = false;

    $scope.lisaModelos = [];


    $scope.opcion = "montacargas";


    $scope.cambiaTipo = function (tipo) {
        $scope.tabla = false;
        $scope.reporte = {};
        $scope.reporte.tipo = tipo;
        $scope.reporte_det = {};
        $scope.reporte_det.tipo = tipo;
    };

    $scope.rep = function (sv, obj) {
        console.log(obj);
        GetSv.getDataParam(sv, {reporte: JSON.stringify(obj)})
                .then(function (data) {
                    if (data.Error) {
                        toaster.pop('danger', "Error", data.Error);
                    } else {
                        if (data.length > 0) {
                            if (data[0].nombre) {
                                $scope.reporte_proy_con = true;
                            } else {
                                $scope.reporte_proy_con = false;
                            }
                            $scope.tabla = true;
                            $scope.objetoTabla = data;
                        } else {
                            toaster.pop('info', "Atención", "No se encontraron datos con los valores especificados",8000);
                        }
                    }
                }, function (e) {
                    toaster.pop('danger', "Exito", "Error fatal");
                });
    }
    $scope.rep_mont = function (obj) {
        $scope.rep('reportesSv', obj);
    };

    $scope.rep_det = function (obj) {
        $scope.rep('reporteDetalle', obj);
    };

    $scope.ocultaTabla = function () {
        $scope.tabla = false;
    }





    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            toaster.pop('danger', "Error", data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaContratos = data;
            }
        }
    }, function (e) {
        toaster.pop('danger', "Error", "Error fatal");
    });

    GetSv.getData("modelos").then(function (data) {
        if (data.Error) {
            toaster.pop('danger', "Error", data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaModelos = data;
            }
        }
    }, function (e) {
        toaster.pop('danger', "Error", "Error fatal");
    });

    $scope.filtraProyectos = function (contrato) {

        GetSv.getDataParam("proyecCont", {contrato: contrato.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaProyectos = data;
                }
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        });
    };

    $scope.filtraEquipos = function (proyecto) {
        GetSv.getDataParam("monProyec", {proyecto: proyecto.codigo}).then(function (data) {
            if (data.Error) {
                toaster.pop('danger', "Error", data.Error);
            } else {
                if (Array.isArray(data)) {
                    $scope.listaMontacargas = data;
                }
            }
        }, function (e) {
            toaster.pop('danger', "Error", "Error fatal");
        });
    };













$scope.clearForm = function(form){
    
}


 $scope.reporte.FechaFinal = new Date();



    $scope.today = function () {
        $scope.reporte.FechaInicial = new Date();
    };

    $scope.today();

    $scope.clear = function () {
        $scope.reporte.FechaInicial = null;
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

    $scope.openFinal = function ($event) {
        if ($scope.popup2.opened === true)
            $scope.popup2.opened = false;
        else
            $scope.popup2.opened = true;
        $event.preventDefault();
        $event.stopPropagation();
    };

    $scope.openInicio = function ($event) {
        if ($scope.popup1.opened === true)
            $scope.popup1.opened = false;
        else
            $scope.popup1.opened = true;
        $event.preventDefault();
        $event.stopPropagation();
    };

    $scope.setDate = function (year, month, day) {
        $scope.reporte.fechaInicial = new Date(year, month, day);
    };

    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['d!/M!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
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

$(function () {

    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Build the chart
    $('#containerGr').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser maret shares. January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
                name: 'Brands',
                data: [
                    {name: 'Microsoft Internet Explorer', y: 56.33},
                    {
                        name: 'Chrome',
                        y: 24.03,
                        sliced: true,
                        selected: true
                    },
                    {name: 'Firefox', y: 10.38},
                    {name: 'Safari', y: 4.77}, {name: 'Opera', y: 0.91},
                    {name: 'Proprietary or Undetectable', y: 0.2}
                ]
            }]
    });
});
