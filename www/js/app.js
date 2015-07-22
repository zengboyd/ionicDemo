// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'templates/sidemenu/search.html'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'templates/sidemenu/browse.html'
      })
     .state('browse', {
        url: '/browse',
        templateUrl: 'templates/sidemenu/browse.html'
      })
      .state('playlists', {
        url: '/playlists',
        templateUrl: 'templates/sidemenu/playlists.html',
        controller: 'PlaylistsCtrl'

      })
     .state('single', {
        url: '/playlists/:playlistId',
        templateUrl: 'templates/sidemenu/playlist.html',
        controller: 'PlaylistCtrl'
      })
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs/tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "templates/tabs/home.html"
          }
        }
      })
      .state('tabs.about', {
        url: "/about",
        views: {
          'about-tab': {
            templateUrl: "templates/tabs/about.html"
          }
        }
      })
      .state('tabs.contact', {
        url: "/contact",
        views: {
          'contact-tab': {
            templateUrl: "templates/tabs/contact.html"
          }
        }
      })
      .state('tabs.demo', {
          url: "/demo",
          views: {
              'home-tab' : {
                  templateUrl: "templates/demo/demo_entry.html"
              }
          }
      })
      .state('tabs.demoLoading', {
          url: "/demoLoading",
          views: {
              'home-tab' : {
                  templateUrl: "templates/demo/demo_loading.html"
              }
          }
      })
      .state('tabs.demoCheckBox', {
          url: "/demoCheckBox",
          views: {
              'home-tab' : {
                  templateUrl: "templates/demo/demo_checkbox.html"
              }
          }
      })
      .state('tabs.demoLoadingBar', {
          url: "/demoLoadingBar",
          views: {
              'home-tab' : {
                  templateUrl: "templates/demo/demo_loadingbar.html"
              }
          }
      });
  //});
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
});
