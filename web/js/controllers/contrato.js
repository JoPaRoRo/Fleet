/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('MetronicApp').controller('ContratoCtrl', function ($scope,PostSv) {
    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.contrato = {};

    $scope.today = function () {
        $scope.contrato.fechaIni = new Date();
    };

    $scope.today();

    $scope.clear = function () {
        $scope.contrato.fechaIni = null;
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
        if ($scope.popup2.opened === true)
            $scope.popup2.opened = false;
        if ($scope.popup1.opened === true)
            $scope.popup1.opened = false;
        else
            $scope.popup1.opened = true;
        $event.preventDefault();
        $event.stopPropagation();
    };

    $scope.open2 = function ($event) {
        if ($scope.popup1.opened === true)
            $scope.popup1.opened = false;
        if ($scope.popup2.opened === true)
            $scope.popup2.opened = false;
        else
            $scope.popup2.opened = true;
        $event.preventDefault();
        $event.stopPropagation();
    };


    $scope.setDate = function (year, month, day) {
        $scope.contrato.fechaIni = new Date(year, month, day);
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
    ;

    $scope.ingresaContrato = function (contrato) {
        PostSv.postData("contratoSv", contrato).then(function (data) {
            if (data.Error) {
                $scope.alerts.push({type: "danger", msg: data.Error});
                console.log(data.Error);
            } else {
                $scope.alerts.push({type: "success", msg: data.Exito});
                //$scope.contrato = {};
            }
        }, function (e) {
            $scope.alerts.push({type: "danger", msg: "Error desconocido"});
        }
        );

       
    };

});

