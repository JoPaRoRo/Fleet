/* global App, Layout, Demo */

/***
 Metronic AngularJS App Main Script
 ***/

/* Metronic App */
var MetronicApp = angular.module("MetronicApp", [
    "ui.router",
    "ui.bootstrap",
    'ui.select',
    "oc.lazyLoad",
    "ngSanitize",
    "mwl.confirm"
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
MetronicApp.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

    }]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
 *********************************************/
/**
 `$controller` will no longer look for controllers on `window`.
 The old behavior of looking on `window` for controllers was originally intended
 for use in examples, demos, and toy apps. We found that allowing global controller
 functions encouraged poor practices, so we resolved to disable this behavior by
 default.
 
 To migrate, register your controllers with modules rather than exposing them
 as globals:
 
 Before:
 
 ```javascript
 function MyController() {
 // ...
 }
 ```
 
 After:
 
 ```javascript
 angular.module('myApp', []).controller('MyController', [function() {
 // ...
 }]);
 
 Although it's not recommended, you can re-enable the old behavior like this:
 
 ```javascript
 angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
 // this option might be handy for migrating old apps, but please don't use it
 // in new ones!
 $controllerProvider.allowGlobals();
 }]);
 **/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
//MetronicApp.config(['$controllerProvider', function($controllerProvider) {
//  // this option might be handy for migrating old apps, but please don't use it
//  // in new ones!
//  $controllerProvider.allowGlobals();
//}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
 *********************************************/

/* Setup global settings */
MetronicApp.factory('settings', ['$rootScope', function ($rootScope) {
        // supported languages
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageContentWhite: true, // set page content layout
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            assetsPath: 'assets',
            globalPath: 'assets/global',
            layoutPath: 'assets/layouts/layout4'
        };

        $rootScope.settings = settings;

        return settings;
    }]);

/***
 Layout Partials.
 By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
 initialization can be disabled and Layout.init() should be called on page load complete as explained above.
 ***/

/* Setup Layout Part - Header */
MetronicApp.controller('HeaderController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initHeader(); // init header
        });
    }]);

/* Setup Layout Part - Sidebar */
MetronicApp.controller('SidebarController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initSidebar(); // init sidebar
        });
    }]);

/* Setup Layout Part - Sidebar */
MetronicApp.controller('PageHeadController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Demo.init(); // init theme panel
        });
    }]);

/* Setup Layout Part - Quick Sidebar */
MetronicApp.controller('QuickSidebarController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            setTimeout(function () {
                QuickSidebar.init(); // init quick sidebar        
            }, 2000);
        });


    }]);

/* Setup Layout Part - Theme Panel */
MetronicApp.controller('ThemePanelController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Demo.init(); // init theme panel
        });
    }]);

/* Setup App Main Controller */
/* global MetronicApp */

MetronicApp.controller('AppController', function ($scope, $rootScope, GetSv, loginService) {
    $scope.$on('$viewContentLoaded', function () {
        App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });

    $scope.logOut = function () {
        loginService.logout();
    }

    $rootScope.roles = ['MECANICO', 'ADMIN', 'MANAGER'];

});

/* Setup Layout Part - Footer */
MetronicApp.controller('FooterController', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initFooter(); // init footer
        });
    }]);

/* Setup Rounting For All Pages */
MetronicApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, loginService) {


        // Redirect any unmatched url
        $urlRouterProvider.otherwise("/login");

        $stateProvider

                // Dashboard
                .state('login', {
                    url: "/login",
                    templateUrl: "views/pages/login.html",
                    controller: "LoginCtrl",
                    data: {pageTitle: 'Login'},
                    //controller: 'LoginCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/loginCtrl.js'
                                    ]
                                });
                            }]

                    }
                })
                .state('main', {
                    url: "/dash",
                    controller: 'MainCtrl',
                    templateUrl: "views/pages/main.html",
                    data: {
                        roles: ['ADMIN', 'MANAGER', 'MECANICO']
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/mainCtrl.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.home', {
                    url: "/home",
                    templateUrl: "views/home.html",
                    data: {pageTitle: 'Inicio',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: 'HomeCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/home.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.insumos', {
                    url: "/insumos",
                    templateUrl: "views/insumos.html",
                    data: {
                        pageTitle: 'Insumos',
                        roles: ['ADMIN', 'MANAGER']
                    },
                    controller: "InsumosCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/insumos.js',
                                        'assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
                                        'assets/pages/scripts/components-bootstrap-select.min.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.realizar', {
                    url: "/realizar",
                    templateUrl: "views/mantenimientos/realizar.html",
                    data: {pageTitle: 'Mantenimientos',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "RealizarCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/mantenimientos/realizar.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.aprobar', {
                    url: "/aprobar",
                    templateUrl: "views/mantenimientos/aprobar.html",
                    data: {pageTitle: 'Mantenimientos',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "AprobarCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/mantenimientos/aprobar.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.horimetro', {
                    url: "/horimetro",
                    templateUrl: "views/horimetro.html",
                    data: {pageTitle: 'Horimetro',
                        roles: ['ADMIN', 'MANAGER', 'MECANICO']},
                    controller: "HorimetroCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/horimetro.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.actualizar', {
                    url: "/actualizar",
                    templateUrl: "views/montacargas/actualizar.html",
                    data: {pageTitle: 'Montacargas',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "ActualizarCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/montacargas/actualizar.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.agregar', {
                    url: "/agregar",
                    templateUrl: "views/montacargas/agregar.html",
                    data: {pageTitle: 'Montacargas',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "AgregarCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/montacargas/agregar.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.consultar', {
                    url: "/consultar",
                    templateUrl: "views/montacargas/consultar.html",
                    data: {pageTitle: 'Montacargas',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "ConsultarCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/montacargas/consultar.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.sidebar', {
                    url: "/sidebar",
                    templateUrl: "js/directives/sidebar/sidebar.html",
                    data: {pageTitle: 'Sidebar',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "SidebarCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js'
                                    ]
                                });
                            }]
                    }
                })

                .state('main.reportes', {
                    url: "/reportes",
                    templateUrl: "views/reportes.html",
                    data: {pageTitle: 'Reportes',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "ReportesCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/reportes.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.reportes.reporte1', {
                    url: "/reporte1",
                    templateUrl: "views/reporte1.html",
                    data: {pageTitle: 'Reporte1',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "Reporte1Ctrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/reportes.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.administracion', {
                    url: "/administracion",
                    templateUrl: "views/administracion.html",
                    data: {pageTitle: 'Administración',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "AdministracionCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/administracion.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.account', {
                    url: "/account",
                    templateUrl: "views/profile/account.html",
                    data: {pageTitle: 'Perfil',
                        roles: ['ADMIN', 'MANAGER', 'MECANICO']},
                    controller: "AccountCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/account.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.usuarios', {
                    url: "/usuarios",
                    templateUrl: "views/usuarios.html",
                    data: {pageTitle: 'Usuarios',
                        roles: ['ADMIN']},
                    controller: "UsuariosCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/usuarios.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.contrato', {
                    url: "/contrato",
                    templateUrl: "views/contrato.html",
                    data: {pageTitle: 'Contratos',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "ContratoCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/contrato.js'
                                    ]
                                });
                            }]
                    }
                })
                .state('main.proyecto', {
                    url: "/proyecto",
                    templateUrl: "views/proyecto.html",
                    data: {pageTitle: 'Proyectos',
                        roles: ['ADMIN', 'MANAGER']},
                    controller: "ProyectoCtrl",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'MetronicApp',
                                    insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                    files: [
                                        'assets/global/plugins/morris/morris.css',
                                        'assets/global/plugins/morris/morris.min.js',
                                        'assets/global/plugins/morris/raphael-min.js',
                                        'assets/global/plugins/jquery.sparkline.min.js',
                                        'assets/pages/scripts/dashboard.min.js',
                                        'js/controllers/proyecto.js'
                                    ]
                                });
                            }]
                    }
                });


        // AngularJS plugins
    }]);

/* Init global settings and run the app */
MetronicApp.run(function ($rootScope, settings, $state, $location, loginService) {

    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toStateParams, fromState) {
        event.preventDefault();
        if (loginService.islogged() === true) {

            if (toState.data.roles) {
                if (toState.data.roles.includes($rootScope.user.rol)) {
                    $state.go(toState.name);
                } else {
                    $state.go(fromState.name);
                }
            }
        } else {
            $state.go('login');
        }
    });




});

