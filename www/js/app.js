// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

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
      .state('main', {
          url: "/main",
          abstract: true,
          templateUrl: "templates/sidemenu/menu.html"
      })
       .state('main.search', {
         url: '/search',
          views: {
              'menu-content': {
                  templateUrl: 'templates/sidemenu/search.html'
              }
          }

       })
       .state('main.settings', {
         url: '/settings',
          views: {
              'menu-content': {
                  templateUrl: 'templates/sidemenu/browse.html'
              }
          }
       })
      .state('main.browse', {
         url: '/browse',
          views: {
              'menu-content': {
                  templateUrl: 'templates/sidemenu/browse.html'
              }
          }

       })
       .state('main.playlists', {
         url: '/playlists',
          views: {
              'menu-content': {
                  templateUrl: 'templates/sidemenu/playlists.html',
                  controller: 'PlaylistsCtrl'
              }
          }
       })
      .state('single', {
         url: '/playlists/:playlistId',
          views: {
              'menu-content': {
                  templateUrl: 'templates/sidemenu/playlist.html',
                  controller: 'PlaylistCtrl'
              }
          }

       })
      .state('main.tabs', {
          url: "/tab",
          abstract: true,
          views: {
              'menu-content': {
                  templateUrl: "templates/tabs/tabs.html",
              }
          }
      })
      .state('main.tabs.home', {
          url: "/home",
          views: {
              'home-tab': {
                  templateUrl: "templates/tabs/home.html"
              }
          }
      })
     .state('main.tabs.about', {
       url: "/about",
       views: {
         'about-tab': {
           templateUrl: "templates/tabs/about.html"
         }
       }
     })
     .state('main.tabs.contact', {
       url: "/contact",
       views: {
         'contact-tab': {
           templateUrl: "templates/tabs/contact.html"
         }
       }
     })
     .state('main.tabs.demo', {
         url: "/demo",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_entry.html"
             }
         }
     })
     .state('main.tabs.demoLoading', {
         url: "/demoLoading",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_loading.html"
             }
         }
     })
     .state('main.tabs.demoCheckBox', {
         url: "/demoCheckBox",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_checkbox.html"
             }
         }
     })
     .state('main.tabs.demoLoadingBar', {
         url: "/demoLoadingBar",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_loadingbar.html"
             }
         }
     })
     .state('main.tabs.animatedList', {
         url: "/animatedList",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_animatedList.html"
             }
         }
     })
     .state('main.tabs.recorderList', {
         url: "/recorderList",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_recorderList.html"
             }
         }
     })
     .state('main.tabs.infiniteScroll', {
           url: "/infiniteScroll",
           views: {
               'home-tab' : {
                   templateUrl: "templates/demo/demo_infiniteScroll.html"
               }
           }
       })
     .state('main.tabs.popover', {
           url: "/popover",
           views: {
               'home-tab' : {
                   templateUrl: "templates/demo/demo_popover.html"
               }
           }
       })
     .state('main.tabs.popup', {
         url: "/popup",
         views: {
             'home-tab' : {
                 templateUrl: "templates/demo/demo_popup.html"
             }
         }
     });
     // .state('search', {
     //   url: '/search',
     //   templateUrl: 'templates/sidemenu/search.html'
     // })
     // .state('settings', {
     //   url: '/settings',
     //   templateUrl: 'templates/sidemenu/browse.html'
     // })
     //.state('browse', {
     //   url: '/browse',
     //   templateUrl: 'templates/sidemenu/browse.html'
     // })
     // .state('playlists', {
     //   url: '/playlists',
     //   templateUrl: 'templates/sidemenu/playlists.html',
     //   controller: 'PlaylistsCtrl'
     //
     // })
     //.state('single', {
     //   url: '/playlists/:playlistId',
     //   templateUrl: 'templates/sidemenu/playlist.html',
     //   controller: 'PlaylistCtrl'
     // })
     // .state('tabs', {
     //   url: "/tab",
     //   abstract: true,
     //   templateUrl: "templates/tabs/tabs.html"
     // })
     // .state('tabs.home', {
     //   url: "/home",
     //   views: {
     //     'home-tab': {
     //       templateUrl: "templates/tabs/home.html"
     //     }
     //   }
     // })
     // .state('tabs.about', {
     //   url: "/about",
     //   views: {
     //     'about-tab': {
     //       templateUrl: "templates/tabs/about.html"
     //     }
     //   }
     // })
     // .state('tabs.contact', {
     //   url: "/contact",
     //   views: {
     //     'contact-tab': {
     //       templateUrl: "templates/tabs/contact.html"
     //     }
     //   }
     // })
     // .state('tabs.demo', {
     //     url: "/demo",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_entry.html"
     //         }
     //     }
     // })
     // .state('tabs.demoLoading', {
     //     url: "/demoLoading",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_loading.html"
     //         }
     //     }
     // })
     // .state('tabs.demoCheckBox', {
     //     url: "/demoCheckBox",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_checkbox.html"
     //         }
     //     }
     // })
     // .state('tabs.demoLoadingBar', {
     //     url: "/demoLoadingBar",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_loadingbar.html"
     //         }
     //     }
     // })
     // .state('tabs.animatedList', {
     //     url: "/animatedList",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_animatedList.html"
     //         }
     //     }
     // })
     // .state('tabs.recorderList', {
     //     url: "/recorderList",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_recorderList.html"
     //         }
     //     }
     // })
     // .state('tabs.infiniteScroll', {
     //       url: "/infiniteScroll",
     //       views: {
     //           'home-tab' : {
     //               templateUrl: "templates/demo/demo_infiniteScroll.html"
     //           }
     //       }
     //   })
     // .state('tabs.popover', {
     //       url: "/popover",
     //       views: {
     //           'home-tab' : {
     //               templateUrl: "templates/demo/demo_popover.html"
     //           }
     //       }
     //   })
     // .state('tabs.popup', {
     //     url: "/popup",
     //     views: {
     //         'home-tab' : {
     //             templateUrl: "templates/demo/demo_popup.html"
     //         }
     //     }
     // });

  //});
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/tab/home');
});
