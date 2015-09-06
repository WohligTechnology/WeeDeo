// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: 'LoginCtrl'
        })
        .state('signup', {
            url: "/signup",

            templateUrl: "templates/signup.html",
            controller: 'SignupCtrl'

        })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            }
        }
    })

    .state('app.video', {
            url: '/video',
            views: {
                'menuContent': {
                    templateUrl: 'templates/video.html',
                    controller: 'VideoCtrl'
                }
            }
        })
        .state('app.picked', {
            url: '/picked',
            views: {
                'menuContent': {
                    templateUrl: 'templates/picked.html',
                    controller: 'PickedCtrl'
                }
            }
        })
        .state('app.event', {
            url: '/event',
            views: {
                'menuContent': {
                    templateUrl: 'templates/event.html',
                    controller: 'EventCtrl'
                }
            }
        })
        .state('app.notification', {
            url: '/notification',
            views: {
                'menuContent': {
                    templateUrl: 'templates/notification.html',
                    controller: 'NotificationCtrl'
                }
            }
        })
        .state('app.setting', {
            url: '/setting',
            views: {
                'menuContent': {
                    templateUrl: 'templates/setting.html',
                    controller: 'SettingCtrl'
                }
            }
        }).
    state('app.bio', {
            url: '/bio',
            views: {
                'menuContent': {
                    templateUrl: 'templates/bio.html',
                    controller: 'BioCtrl'
                }
            }
        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});