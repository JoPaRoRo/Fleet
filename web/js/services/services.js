/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global MetronicApp */

MetronicApp.service('GetSv', function ($http, $q, AlertSv) {

    this.getData = function (url) {
        var d = $q.defer();
        $http.get(url)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function (e) {
                    d.reject("Error " + e);
                });

        return d.promise;
    };

    this.getDataParam = function (url, data) {
        var d = $q.defer();
        $http.get(url, {params: data})
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function (e) {
                    d.reject("Error " + e);
                });

        return d.promise;
    };

}).service('PostSv', function ($http, $q) {

    var transform = function (data) {
        return $.param(data);
    };

    this.postData = function (url, data) {
        var d = $q.defer();
        $http.post(url, data, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        })
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function (e) {
                    d.reject("Error Desconocido: " + e);
                });

        return d.promise;
    };

}).service('AdmiSv', function ($http, $q) {

    this.getUsuarios = function () {
        var usuarios = $q.defer();
        $http.get("data/personas.json")
                .success(function (data) {
                    usuarios.resolve(data);
                })
                .error(function (e) {
                    usuarios.reject("Error " + e);
                });

        return usuarios.promise;
    };

    this.ingresaUsuario = function (usuario) {

    };

    this.borraUsuario = function (usuario) {

    };

}).service('LoginSv', function ($http, $q) {

    var transform = function (data) {
        return $.param(data);
    };
    this.validateLogin = function (user) {
        var login = $q.defer();
        $http.post('login', user, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        })
                .success(function (data) {
                    login.resolve(data);
                })
                .error(function (e) {
                    login.reject("Error " + e);
                });

        return login.promise;
    };

}).service('AlertSv', function () {

    this.push = function (alerts, data) {
        if (Array.isArray(alerts))
            alerts.push(data);
    };

    this.close = function (alerts, index) {
        if (Array.isArray(alerts))
            alerts.splice(index, 1);
    };
}).service("XLSXReaderService",
        function ($q, $rootScope) {

            this.readFile = function (file, showPreview) {
                var deferred = $q.defer();
                console.log(file);
                XLSXReader(file, false,true, function (data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            };
        }
);