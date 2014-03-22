angular.module('app.services')
	.factory('ApiService', ["$http", "$q", function ($http, $q) {
	    return {
	        restaurants: {
	            getNearBy: function () {
	            	var defer = $q.defer();
	            	var get = $http.get('rest.json');
	            	get.then(function(response) {
	            		defer.resolve(response.data);
	            	}).catch(function(err){
	            		defer.reject(err);
	            	})
	                return defer.promise;
	            }
	        }
	    };
	}]);