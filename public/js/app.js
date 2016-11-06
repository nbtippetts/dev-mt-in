angular.module('devApp', ['ui.router', 'ui.bootstrap'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
     .state('entryview', {
       url: '/entryview',
       templateUrl: './view/entryview.html'
     })

     .state('home', {
       url: '/',
       templateUrl: './view/landingpage.html'
     })

     .state('landingpage', {
       url: '/landingpage',
       templateUrl: './view/landingpage.html'
     })

     .state('findfriend', {
       url: '/findfriend',
       templateUrl: './view/findfriend.html'
       //controller: 'findFriendCtrl'
     })

     .state('viewfriend', {
       url: '/viewfriend',
       templateUrl: './view/viewfriend.html'
     })

     .state('updateprofile', {
       url: '/updateprofile',
       templateUrl: './view/updateprofile.html'
       //controller: 'updateProfileCtrl'
     })

     $urlRouterProvider
       .otherwise('/')

  })
