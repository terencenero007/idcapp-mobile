// Ionic ionic-todo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionic-todo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('idc-mobile-app', ['ionic']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

// Main controller description
app.controller('main', function ($scope) {
    
    // Messages to bind in the view
    $scope.messages = [];

    // Fetch messages from the server   
    $scope.getMessages = function () {
        $scope.messages = [
          {
            "title": "IDC Townhall",
            "content": "On April 15th 4.30 PM to 5.30 PM in boardroom first floor"
          },
          {
            "title": "Cultural Event",
            "content": "On May 30th 1.30 PM to 6.30 PM in boardroom first floor"
          }
        ];
    };
});