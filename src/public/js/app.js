"use strict";

var app = angular.module("app", ["ng", "ngRoute", "app.controllers", "app.services"]);

angular.module("app.services", []);

angular.module("app.controllers", ["app.services"]);

var routeProvider = function ($routeProvider) {
    $routeProvider.
      when("/", { templateUrl: "templates/restaraunts-nearby.html", controller: "RestaurantListCtrl" }).
      otherwise({ redirectTo: "/" });
};

app.config(["$routeProvider", routeProvider]);