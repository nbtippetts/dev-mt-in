 var newUser = [{
   name: '',
   tagline: '',
   bio: '',
   profileUrl: ''
   //friends: [friendId]
 }];

 module.exports = {
  UserValues: function(newUser){
    if ($scope.name && $scope.tagline && $scope.bio && $scope.profileUrl){
      return true;
      console.log('this is user values', newUser)
    } else {
      return false;
    }
    return newUser
  },

  CreateUser: function(){
    return {
      name: $scope.name,
      tagline: $scope.tagline,
      profilePic: $scope.profilePic,
      bio: $scope.bio,
    }
  }
 }
