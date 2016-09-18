// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'view/home.html',
                controller: 'mainController'
            })
            .otherwise({
                redirectTo: '/'
            });
});

// controlador angular js
angularRoutingApp.controller('mainController', function ($scope, $http) {
    $scope.valor = 1;
 
// servicio para obtener datos de servidor backend del clima de cartagena
    $http({
        
        method: 'GET',
        params: {codciudad: '10200'},
        cache: true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: '/backendtiempo/webresources/servicios/climaciudad'

    }).then(function successCallback(response) {

        $scope.data = response.data;
        var array = $scope.data;
        $scope.datos = array[0];
        $scope.nomCiudad = $scope.datos.nomCiudad;
        $scope.nomestado = $scope.datos.nomestado;
        $scope.grados = $scope.datos.celsius;
        $scope.farenheit = $scope.datos.farenheit;
        $scope.probprec = $scope.datos.probprec;
        $scope.humedad = $scope.datos.humedad;
        $scope.viento = $scope.datos.viento;
        $scope.dia = $scope.diaSemana();
        $scope.gradost = "Farenheiht";
        $scope.datotemp = $scope.grados + "°C";

        if ($scope.datos.idestado == 1) {
            $scope.url = "./assets/images/soleado.png";
            console.log("estado 1");
        } else if ($scope.datos.idestado == 2) {
            $scope.url = "./assets/images/parcialnub.png";
            console.log("estado 2");
        } else if ($scope.datos.idestado == 3) {
            $scope.url = "./assets/images/nublado.png";
            console.log("estado 3");
        } else if ($scope.datos.idestado == 4) {
            $scope.url = "./assets/images/tormelect.png";
            console.log("estado 4");
        }

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        
       alert("problemas en invocar json");
    });
    
    //////////////////////////////////////////////////////////////////////
    // servicio para obtener datos de servidor backend lista de ciudades 
    
    
        $http({
        method: 'GET',
         cache: true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: '/backendtiempo/webresources/servicios/mostrardatosclimas'

    }).then(function successCallback(response) {

        $scope.dataciudad = response.data;
        var variable=$scope.dataciudad;
       console.log(variable[0]);
     

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    
    
    // funcione que busca desde el servicio web los datos del clima de la ciudad 
       


    $scope.mostrarTemperaturaCiudad = function () {
        $scope.valor = 1;
     
        $http({
            method: 'GET',
            params: {codciudad: $scope.codigo},
            cache: true,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: '/backendtiempo/webresources/servicios/climaciudad'

        }).then(function successCallback(response) {
           
            $scope.data = response.data;
            var array = $scope.data;
            $scope.datos = array[0];
            $scope.nomCiudad = $scope.datos.nomCiudad;
            $scope.nomestado = $scope.datos.nomestado;
            $scope.grados = $scope.datos.celsius;
            $scope.farenheit = $scope.datos.farenheit;
            $scope.probprec = $scope.datos.probprec;
            $scope.humedad = $scope.datos.humedad;
            $scope.viento = $scope.datos.viento;
            $scope.dia = $scope.diaSemana();
            $scope.gradost = "Farenheiht";
            $scope.datotemp = $scope.grados + "°C";





            if ($scope.datos.idestado == 1) {
                $scope.url = "./assets/images/soleado.png";
                console.log("estado 1");
            } else if ($scope.datos.idestado == 2) {
                $scope.url = "./assets/images/parcialnub.png";
                console.log("estado 2");
            } else if ($scope.datos.idestado == 3) {
                $scope.url = "./assets/images/nublado.png";
                console.log("estado 3");
            } else if ($scope.datos.idestado == 4) {
                $scope.url = "./assets/images/tormelect.png";
                console.log("estado 4");
            }

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
         
        });

    }




// funcione cambiar la vista celsius a farenheit y viceversa
    
    $scope.verTemperatura = function () {
        if ($scope.valor == 0) {
            $scope.valor = 1;
            $scope.gradost = "Farenheiht";
            $scope.datotemp = String($scope.grados).concat("°C");
        } else if ($scope.valor == 1) {
            $scope.valor = 0;
            $scope.gradost = "Grados";
            $scope.datotemp = String($scope.farenheit).concat("°F");
        }

        console.log($scope.valor);
    }

// funcion que devuelve el dia de la semana

    $scope.diaSemana = function () {
        var fecha = new Date();

        var semana0 = "Domingo";
        var semana1 = "Lunes";
        var semana2 = "Martes";
        var semana3 = "Miercoles";
        var semana4 = "Jueves";
        var semana5 = "Viernes";
        var semana6 = "Sabado";

        var hoy = fecha.getDay();

        return eval("semana" + hoy);
    }

});




