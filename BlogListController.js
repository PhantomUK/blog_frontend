(function(){
  'use strict';

    var blog = angular.module('myblog');

    blog.controller('BlogListController', ['$scope', '$sce', 'blogAPI', function ($scope, $sce, blogAPI) {

        var onBlogListComplete = function(data) {
            $scope.blog_list = data;
        };

        var onBlogArticleComplete = function(data) {
            $scope.article = {
                title: data.title,
                body: $sce.trustAsHtml(data.body.und[0].value)
            }
        };

        blogAPI.getBlogList().then(onBlogListComplete);

        $scope.getNid = function(nodeItem) {
            return blogAPI.getBlogArticle(nodeItem.nid).then(onBlogArticleComplete);
        };

    }]);

})();
