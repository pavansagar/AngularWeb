'use strict';

angular.module('app.controllers')

    .controller('LoginCtrl', ['$scope', '$location', '$window', '$stateParams', 'UserService', function ($scope, $location, $window, $stateParams, UserService) {
        $scope.$root.title = 'AngularJS SPA | Login In';

        //$scope.firstName = 'Pavan';

        $scope.login = {};
        $scope.login.userName = '';
        $scope.login.password = '';

        //Object to hold the logged in user details.
        $scope.LoggedInUser = {};

        //function called by submit in Login screen
        $scope.LoginUser = function (user, pass) {
            
            //service call to verify the user

            console.log('LoginUser function is called');
            console.log('UserName Passed : ' + user);

            //alert('Inside ng-submit called method')

            $scope.LoggedInUser.UserName = user;
            $scope.LoggedInUser.Role = 'Admin';
            $scope.LoggedInUser.EMail = 'user@gmail.com';
            $scope.LoggedInUser.DistrictName = 'Douglas';

            console.log($scope.LoggedInUser);

            //UserService.user.SetUser($scope.LoggedInUser);
            console.log(UserService.UserName);
            console.log(UserService);

            //redirect to another url
            $window.location.href = '/userinfo';

            //return $scope.LoggedInUser;
        }

    }]);