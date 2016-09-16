// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		.when('/admin/nuevaciudad', {
			templateUrl : 'pages/nuevaciudad.html',
			controller 	: 'ncController'
		})
		.when('/admin/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
                .when('/admin/mostrar', {
			templateUrl : 'pages/mostrartablatodo.html',
                controller 	: 'formController'
			
		})
		.otherwise({
			redirectTo: '/'
		});
});


angularRoutingApp.controller('mainController', function($scope) {
	$scope.message = 'Hola, Mundo Carlos!';
});

angularRoutingApp.controller('ncController', function($scope,$http) {
	$scope.message = 'La pagina de nueva ciudad"';
        
        $scope.nuevaCiudad = function () {
         $http({
            method: 'GET',
            params: {codigociudad:$scope.codciudad,nombreciudad:$scope.nomciudad},
            cache: true,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: '/backendtiempo/webresources/servicios/nuevaciudad'

        }).then(function successCallback(response) {
           
            $scope.data = response.data;
           alert($scope.data);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
         
        });

    }
        
        
        
});

angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});

angularRoutingApp.controller('formController', function($scope,$http) {

$http({
  method: 'GET',
  cache: true,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  url: '/backendjava/json/consulta/mostrar'
}).then(function successCallback(response) {
  
  $scope.data = response.data;
   
   
  
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


    }

);

