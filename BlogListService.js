(function(){
    'use strict';

    var blogAPI = function($http){
        var getBlogList = function() {
            return $http.get("http://timblog-culcheth.rhcloud.com/apiv1/node/").then(function (response) {
                return response.data;
            });
        };

        return {
            getBlogList: getBlogList
        };
    };

    var myblog = angular.module('myblog');
    myblog.factory('blogAPI', blogAPI);

}());
