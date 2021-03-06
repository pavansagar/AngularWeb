﻿'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', ['app.services'])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        //$scope.$on('$viewContentLoaded', function () {
        //    $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        //});
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | About Page';
        //$scope.$on('$viewContentLoaded', function () {
        //    $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        //});
    }])

    // Path: /login
    ////.controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    ////    $scope.$root.title = 'AngularJS SPA | Sign In';
        
    ////    // TODO: Authorize a user
    ////    $scope.login = function () {

    ////        var loggedUser = {};

    ////        loggedUser.userName = $scope.userName;
    ////        loggedUser.password = $scope.password;

    ////        UserService.setUser(loggedUser);

    ////        //////$location.path('/');
    ////        //////return false;
    ////    };


        //$scope.$on('$viewContentLoaded', function () {
        //    $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        //});
    ////}])

    .controller('RegisterCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.$root.title = 'AngularJS SPA | Register';
        $scope.PageTitle = 'Register Page. This value is defined in the scope of the Register controller and is available only in Register page.';
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        //$scope.$on('$viewContentLoaded', function () {
        //    $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        //});
    }]);