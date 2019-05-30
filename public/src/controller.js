angular.module('teste')
    .factory('scopes', function($rootScope){
        var save = {};

        return {
            store: function(key, value) {
                $rootScope.$emit('scope.stored', key);
                save[key] = value;
            },
            get: function(key) {
                return save[key];
            }
        }
    })
    .controller('produtosCtrl', function($scope, $http, scopes) {
        
        $http.get("https://private-59658d-celulardireto2017.apiary-mock.com/plataformas")
        .then(function (response){
            $scope.platforms = response.data.plataformas;
        })

        scopes.store('produtosCtrl', $scope);

        $scope.SkuPlatform = function(sku) {
            $scope.skuPlataforma = sku;
            return $scope.skuPlataforma;
        }

        $scope.NomePlatform = function(nome) {
            $scope.nomePlataforma = nome;
            return $scope.nomePlataforma;
        }

    })
    .controller('planosCtrl', function($scope, $http, scopes) {

        $scope.sku = scopes.get('produtosCtrl').skuPlataforma;

        $scope.carregaPlanos = function () {
            var url = "https://private-59658d-celulardireto2017.apiary-mock.com/planos/" + $scope.sku;
            $http.get(url)
                .then(function(response){
                    $scope.plans = response.data.planos;
                });
        }

        scopes.store('planosCtrl', $scope);

        $scope.NomePlano = function(nome) {
            $scope.nomePlano = nome;
            return $scope.nomePlano;
        }

        $scope.$on('$viewContentLoaded', function() {
            $scope.carregaPlanos();
        })
    })
    .controller('formCtrl', function($scope, scopes){
        scopes.store('formCtrl', $scope);

        $scope.createCadastro = function() {
            console.log("Cadastro", $scope.cadastro)
            console.log("Pedido: " + scopes.get('produtosCtrl').nomePlataforma + " | Plano: " + scopes.get('planosCtrl').nomePlano);
            alert("Solicitação Realizada!")
        }

    })