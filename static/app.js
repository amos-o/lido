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
                    templateUrl: "static/partials/login.html"
                })
                .state('lido', {
                    url: "/lido/",
                    templateUrl: "static/partials/lido.html"
                });
        }
    ]);
