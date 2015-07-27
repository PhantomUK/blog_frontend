(function(){
  'use strict';

    var blog = angular.module('myblog');

    blog.service('blogListAPI', ['$scope', '$http', function($scope, $http) {
       $http.get("http://timblog-culcheth.rhcloud.com/apiv1/node/")
      		.then(function (response) {
        		$scope.list = response.data;
        		console.log($scope.list);
    		});
        
        
        
       return {
            blogList: function() {
                return $scope.list;
            }
        };
        
    }]);
    
})();