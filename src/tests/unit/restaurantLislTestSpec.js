'use strict';

describe('RestaurantListCtrl test set', function() {
    var scope, location, rootScope, controller, _apiService, _window, q;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $location, $rootScope, $q, ApiService) {
        controller = $controller;
        rootScope = $rootScope;
        location = $location;
        q = $q;
        scope = rootScope.$new();
        _apiService = ApiService;
        _window = {
            alert: function(msg) {}
        };
    }));

    var createController = function() {
        return controller('RestaurantListCtrl', {
            $scope: scope,
            $location: location,
            $window: _window,
            ApiService: _apiService
        });
    };

    it('should have scope initialized', function() {
        createController();
        expect(scope.restaurants.length).toBe(0);
        expect(scope.select).toBeDefined();
        expect(scope.load).toBeDefined();
    });

    it('should populate restaurants list when initialized', function() {
        var defer = q.defer();
        spyOn(_apiService.restaurants, 'getNearBy').andReturn(defer.promise);
        createController();
        defer.resolve({ "Details": [{}, {}] });
        scope.$apply();
        expect(scope.restaurants.length).toBe(2);
    });

    it('should call window.alert when fails to load list', function() {
        var defer = q.defer();
        spyOn(_apiService.restaurants, 'getNearBy').andReturn(defer.promise);
        spyOn(_window, "alert");

        createController();
        var error = new Error("Error 123");
        defer.reject(error);
        scope.$apply();

        expect(_window.alert).toHaveBeenCalledWith(error.message);
        expect(scope.restaurants.length).toBe(0);
    });
});
