'use strict';
angular.module('MetronicApp').factory('loginService', function ($http, $state, sessionService, PostSv, $rootScope, GetSv,toaster) {
    return{
        login: function (data, scope) {

            PostSv.postData('login', data)
                    .then(function (data) {
                        if (data.Error) {
                            scope.msgtxt = data.Error;
                            console.log(data.Error);
                        } else {
                            sessionService.set('uid', data.id_usuario);
                            if (data.rol === 'MECANICO') {
                                $state.go("main.horimetro");
                            } else {
                                $state.go("main.home");
                            }
                            $rootScope.user = data;
                        }
                        scope.entrando = false;
                    }, function (e) {
                        scope.msgtxt = "Error desconocido, intente mas tarde";
                    });

        },
        logout: function () {
            sessionService.destroy('uid');
            GetSv.getData('logOut').then(function (data) {
                if (data.Estado === true) {
                    $state.go("login");
                } else {
                    alert("Error");
                }
            });

        },
        islogged: function () {
            var b = false;
            if (sessionService.get('uid'))
                b = true;
//            PostSv.postData('check').then(function (data) {
//                b = data.Estado;
//            });
            return b;
        },
        verifySession: function () {
            if (isLogged()) {
                $state.go('main.home');
            } else {
                $state.go('login');
            }
        }
        ,
        getUser: function () {
            var uid = sessionService.get('uid');
            GetSv.getDataParam('getUser', {usuario: uid})
                    .then(function (data) {
                        if (data.Error) {
                        } else {
                            $rootScope.user = data;
                        }

                    });
        }
    };

});

