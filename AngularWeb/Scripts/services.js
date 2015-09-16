'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])

    .factory('UserService', function(){

        var loggedUser = {};

        loggedUser.UserName = 'Pavans';
        loggedUser.Role = 'AdminUser';
        loggedUser.Email = 'Pavan@sagar.com';
        loggedUser.District = 'Jefferson';

        return loggedUser;
});
//    .value('version', '0.1');
