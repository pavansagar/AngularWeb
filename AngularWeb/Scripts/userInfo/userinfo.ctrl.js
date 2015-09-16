'use strict';

angular.module('app.controllers')

    .controller('UserInfoCtrl', ['$scope', '$location', '$window', 'UserService', function($scope, $location, $window, UserService) {

        //$scope.user = UserService.GetUser();
        
        //console.log('Logged In User Name: ' + $rootScope.CurrentUser.UserName);

        console.log('From UserInfo Page');
        console.log('Logged In User Name: ' + UserService.UserName);
        console.log('Logged In Email: ' + UserService.Email);
        console.log('Logged In Role: ' + UserService.Role);
        console.log('Logged In District: ' + UserService.District);

        $scope.CurrentUser = {};
        $scope.CurrentUser.UserName = UserService.UserName;
        $scope.CurrentUser.Email = UserService.Email;
        $scope.CurrentUser.Role = UserService.Role;
        $scope.CurrentUser.District = UserService.District;

    }]);