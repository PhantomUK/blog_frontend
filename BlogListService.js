(function(){
    'use strict';

    var blogAPI = function($http){
        var getBlogList = function() {
            return $http.get("http://timblog-culcheth.rhcloud.com/apiv1/node/").then(function (response) {
                console.log(response.data);
                return response.data;
            });
        };

        var getBlogArticle = function(nid) {
            return $http.get("http://timblog-culcheth.rhcloud.com/apiv1/node/" + nid).then(function (response) {
                console.log(response.data);
                return response.data;
            });
        };

        return {
            getBlogList: getBlogList,
            getBlogArticle: getBlogArticle
        };
    };

    var myblog = angular.module('myblog');
    myblog.factory('blogAPI', blogAPI);

}());
