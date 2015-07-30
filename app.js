(function(){
  'use strict';

    var blog = angular.module('myblog', ['ui.router']);

    // configure our routes
    blog.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl : 'pages/bloglist.html',
                controller  : 'BlogListController'
            })
            .state('blogs', {
                url : '/blogs',
                templateUrl : 'pages/bloglist.html',
                controller  : 'BlogListController'
            })
            .state('about', {
                url : '/about',
                templateUrl : 'pages/aboutme.html',
                //controller  : 'aboutController'
            })
            .state('cv', {
                url : '/cv',
                templateUrl : 'pages/cv.html',
                //controller  : 'cvController'
            })
            .state('contact', {
                url : '/contact',
                templateUrl : 'pages/contactme.html',
                //controller  : 'contactController'
            });
        }]);

})();
