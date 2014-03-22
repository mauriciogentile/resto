"use strinct;";

angular.module('app.controllers')
    .controller('RestaurantListCtrl', ["$scope", "$routeParams", "$rootScope", "$window", "ApiService", function ($scope, $routeParams, $rootScope, $window, ApiService) {
        $scope.restaurants = [];
        $scope.select = function (id) {
            $window.alert("RestaurantListCtrl.select is not implemented!");
        };
        $scope.load = function () {
            ApiService.restaurants.getNearBy()
                .then(function (data) {
                    $scope.restaurants = data.Details;
                }).
                catch(function(err) {
                    $window.alert(err.message);
                });
        };
        $scope.load();
}]);