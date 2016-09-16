// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		
		.when('/pagina/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
                .when('/pagina/mostrar', {
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



angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = 'Pagina de Contacto';
});

angularRoutingApp.controller('formController', function($scope) {

$scope.message = 'Pagina de Mostrar';

    }

);

