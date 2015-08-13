(function(){
  'use strict';

    var blog = angular.module('myblog');

    blog.controller('BlogListController', ['$scope', '$sce', 'blogAPI', function ($scope, $sce, blogAPI) {

        var onBlogListComplete = function(data) {
            $scope.blog_list = data;
        };

        var onBlogArticleComplete = function(data) {
            $scope.article = {
                title: data[0].node_title,
                body: $sce.trustAsHtml(data[0].Body),
                last_updated: data[0].node_changed
            }
        };

        blogAPI.getBlogList().then(onBlogListComplete);

        $scope.getNid = function(nodeItem) {
            return blogAPI.getBlogArticle(nodeItem.nid).then(onBlogArticleComplete);
        };

    }]);

})();
