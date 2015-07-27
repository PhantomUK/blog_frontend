(function(){
  'use strict';

    var blog = angular.module('myblog');

    blog.controller('blogListController', ['$scope', 'blogListAPI', function ($scope, blogListAPI) {

        $scope.blogList = blogListAPI.blogList();
        
    }]);

})();