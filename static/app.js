angular
    .module("lido", [
                        'ui.router',
                        'ngMaterial',
                        'firebase'
                    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('login', {
                    url: "/",
                    templateUrl: "../templates/partials/login.html"
                })
                .state('lido', {
                    url: "/lido/",
                    templateUrl: "../templates/partials/lido.html"
                });
        }
    ]);
