/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('AppMostrar', []);
app.controller('controladormostrar', function ($scope, $http) {
    

// funcion servicio recibe el formato json
$scope.mostrarClimaCiudad = function () {

 $http({
        method: 'GET',
         cache: true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: '/backendtiempo/webresources/servicios//mostrardatosclimas'

    }).then(function successCallback(response) {

        $scope.dataclima = response.data;
        console.log($scope.dataclima);
      
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    }); 

}


// evento de mostrar mas datos
$scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

});





///////////////////////////////////////////////////////





