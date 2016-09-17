/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('AppInsertar', []);
app.controller('controladorinsertar', function ($scope, $http) {
  
  $http({
        method: 'GET',
         cache: true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: '/backendtiempo/webresources/servicios/mostrarestados'

    }).then(function successCallback(response) {

        $scope.dataestado = response.data;
      
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });   
    
    ///////////////////////////////////////////////////////////////////////
    $scope.reset = function (form) {
        $scope.user = {};
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
    };

    $scope.nuevaCiudad = function (form) {
        $http({
            method: 'GET',
            params: {codciudad: $scope.cciudad, nomciudad: $scope.nciudad
                , idestado: $scope.estado, celsius: $scope.celsius,
                probprec: $scope.probprec,humedad: $scope.humedad, 
                viento: $scope.viento},
            cache: true,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            success: "true",
            url: '/backendtiempo/webresources/servicios/nuevaciudadclima'

        }).then(function successCallback(response) {

            $scope.data = response.data;
            var array = $scope.data;
            $scope.mensaje = array.mensaje;
             alert($scope.mensaje);
          

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            alert("problemas en invocar json");
        });

    }
    


});





///////////////////////////////////////////////////////





