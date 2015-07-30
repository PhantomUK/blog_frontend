(function(){
  'use strict';

    var blog = angular.module('myblog');

    blog.controller('BlogListController', ['$scope', 'blogAPI', function ($scope, blogAPI) {

        var onBlogListComplete = function(data) {
            $scope.blog_list = data;
        };

        blogAPI.getBlogList().then(onBlogListComplete);

    }]);

})();
