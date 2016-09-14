// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'view/home.html',
			controller 	: 'mainController'
		})
		.when('/admin/acerca', {
			templateUrl : 'view/acerca.html',
			controller 	: 'aboutController'
		})
		.when('/admin/contacto', {
			templateUrl : 'view/contacto.html',
			controller 	: 'contactController'
		})
                
		.otherwise({
			redirectTo: '/'
		});
});


angularRoutingApp.controller('mainController', function($scope) {
	$scope.message = 'Hola, Mundo Carlos!';
});

angularRoutingApp.controller('aboutController', function($scope) {
	$scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});



