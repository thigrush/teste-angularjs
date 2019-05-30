angular.module('teste', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/produtos', {
                    templateUrl: 'src/view/produtos.html',
                    controller: 'produtosCtrl'
                }).when('/planos', {
                    templateUrl: 'src/view/planos.html',
                    controller: 'planosCtrl'
                }).when('/form', {
                    templateUrl: 'src/view/form.html',
                    controller: 'formCtrl'
                }).otherwise({
                    redirectTo: "/produtos"
                });
        }
])