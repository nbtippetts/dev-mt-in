angular.module('devApp').service('myService', function( $http, $location ) {
    return {

    createUser: function( user ) {
        return $http.post('/api/createUser', user);
        console.log('this is sign up', user)
      }
       res.send({$location.user})
    }

  });
