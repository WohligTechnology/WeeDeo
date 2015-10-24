// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var formvalidation = function(allvalidation) {
    var isvalid2 = true;
    for (var i = 0; i < allvalidation.length; i++) {
        if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
            allvalidation[i].validation = "ng-dirty";
            isvalid2 = false;
        }
    }
    return isvalid2;
}

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.withCredentials = true;
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

    .state('app.gallery-inner', {
            url: '/gallery-inner/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/gallery-inner.html',
                    controller: 'GalleryInnerCtrl'
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
    }).
    state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    }).
    state('app.eventdetail', {
        url: '/eventdetail/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventdetail.html',
                controller: 'EventdetailCtrl'
            }
        }
    }).
    state('app.playlist', {
        url: '/playlist',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    }).
    state('app.videodetail', {
        url: '/videodetail/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/videodetail.html',
                controller: 'VideodetailCtrl'
            }
        }
    }).
    state('app.playlistvideo', {
        url: '/playlistvideo',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlistvideo.html',
                controller: 'PlaylistvideoCtrl'
            }
        }
    }).
    state('app.feed', {
            url: '/feed',
            views: {
                'menuContent': {
                    templateUrl: 'templates/feed.html',
                    controller: 'FeedCtrl'
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
})

.directive('youtube', function($sce) {
    return {
        restrict: 'A',
        scope: {
            code: '='
        },
        replace: true,
        template: '<iframe id="popup-youtube-player" style="overflow:hidden;width:100%" width="100%" height="175px" src="{{url}}" frameborder="0" allowscriptaccess="always" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>',
        link: function(scope) {
            scope.$watch('code', function(newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
})

.filter('convertTok', function() {
    return function(rep) {
        rep = rep + ''; // coerce to string
        if (rep < 1000) {
            return rep; // return the same number
        }
        if (rep < 10000) { // place a comma between
            return rep.charAt(0) + ',' + rep.substring(1);
        }
        // divide and format
        return (rep / 1000).toFixed(rep % 1000 != 0) + 'k';
    };
})

.filter('numberWithCommas', function() {
    return function(x) {
        if (x)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        else
            return "";
    };
})

.filter('serverimage', function() {
    return function(image) {
        if (image && image != null) {
            return adminimage + image;
        } else {
            return undefined;
        }
    };
})

.filter('formatDate', function($filter) {
    return function(date) {
        if (date && date != null) {
            return $filter('date')(new Date(date), "dd MMM, yyyy");
        } else {
            return "";
        }
    };
})

.filter('formatTime', function($filter) {
    return function(time) {
        if (time) {
            var time = time;

            var time = time.split(':');

            var hours = Number(time[0]);
            var minutes = Number(time[1]);
            var seconds = Number(time[2]);

            var timeValue = "" + ((hours > 12) ? hours - 12 : hours);
            timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
            // timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;
            timeValue += (hours >= 12) ? " PM" : " AM";
            return timeValue;
        } else {
            return "";
        }
    };
})
