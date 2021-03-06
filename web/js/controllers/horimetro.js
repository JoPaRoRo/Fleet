/* global MetronicApp */

/**
 * Created by Jos�Pablo on 10/28/2015.
 */
angular.module('MetronicApp').controller('HorimetroCtrl', function ($scope, GetSv, PostSv, AlertSv, $rootScope, toaster) {
    $scope.horimetro = {};

    $scope.horimetro.fechaIni = new Date();
    $scope.minDate = $scope.horimetro.fechaIni;
    $scope.maxDate = new Date();

    GetSv.getData("contratos").then(function (data) {
        if (data.Error) {
            toaster.pop('error', "Error", data.Error);
            console.log(data.Error);
        } else {
            if (Array.isArray(data)) {
                $scope.listaContratos = data;
                console.log(data);
            }
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
        $scope.horimetro.montacargas = {};
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

    $scope.ingresaHorimetro = function (horimetro) {
        PostSv.postData("ingHorimetro", {montacargas: horimetro.montacargas.numero_serie, horas: horimetro.horas, fechaIni: horimetro.fechaIni})
                .then(function (data) {
                    if (data.Error) {
                        toaster.pop('error', "Error", data.Error);
                    } else {
                        toaster.pop('success', "Exito", data.Exito);
                        clearForm($scope.userForm);
                        $scope.horimetro = {};
                        $rootScope.getAlerts();
                    }
                }, function (e) {
                    toaster.pop('error', "Error", "Error fatal");
                }
                );


    };

    var clearForm = function(form){
        form.$setPristine();
        form.$setUntouched();
    };

    $scope.today = function () {
        $scope.horimetro.fechaIni = new Date();
    };

    $scope.today();

    $scope.clear = function () {
        $scope.horimetro.fechaIni = null;
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

    $scope.open = function ($event) {
        if ($scope.popup1.opened === true)
            $scope.popup1.opened = false;
        else
            $scope.popup1.opened = true;
        $event.preventDefault();
        $event.stopPropagation();
    };

    $scope.setDate = function (year, month, day) {
        $scope.horimetro.fechaIni = new Date(year, month, day);
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