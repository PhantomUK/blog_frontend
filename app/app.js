(function(){
  'use strict';

    var blog = angular.module('myblog', ['ui.router', 'angular-loading-bar']);

    // configure our routes
    blog.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl : 'app/assets/pages/bloglist.tpl.html',
                controller  : 'BlogListController'
            })
            .state('blogs', {
                url : '/blogs',
                templateUrl : 'app/BlogList/bloglist.tpl.html',
                controller  : 'BlogListController'
            })
            .state('about', {
                url : '/about',
                templateUrl : '../assets/pages/aboutme.html',
                //controller  : 'aboutController'
            })
            .state('cv', {
                url : '/cv',
                templateUrl : '../assets/pages/cv.html',
                //controller  : 'cvController'
            })
            .state('contact', {
                url : '/contact',
                templateUrl : '../assets/pages/contactme.html',
                //controller  : 'contactController'
            });
        }]);

})();
