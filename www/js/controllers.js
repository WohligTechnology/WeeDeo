angular.module('starter.controllers', ['ion-gallery'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, MyServices) {

    $scope.userDetails = MyServices.getUser();
    console.error($scope.userDetails);

})

.controller('HomeCtrl', function($scope, $ionicScrollDelegate, $stateParams, $http, MyServices, $ionicLoading, $timeout, $filter) {

    //        ***** tabchange ****

    $scope.tab = 'video';
    $scope.classa = 'active';
    $scope.classb = '';
    $scope.classc = '';
    $scope.tabchange = function(tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {
            $ionicScrollDelegate.scrollTop();
            $scope.classa = "active";
            $scope.classb = '';
            $scope.classc = '';
        } else if (a == 2) {
            $ionicScrollDelegate.scrollTop();
            $scope.classa = '';
            $scope.classb = "active";
            $scope.classc = '';
        } else {
            $ionicScrollDelegate.scrollTop();
            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = "active";
        }
    };


    //            ******** end *******

    //    ******* custom json ******

    $scope.video = [{
        image: "img/video/2.jpg",
        title: "Disnei Beauty and the Beast",
        date: "25, March, 2015",
        venue: "Royal Rose Club",
        detail: "Alpherta CA"
    }, {
        image: "img/video/3.jpg",
        title: "Bollywud Dream Tours",
        date: "25, March, 2016",
        venue: "Sahara Rose Club",
        detail: "Athens GA"
    }, {
        image: "img/video/4.jpg",
        title: "Mumbai Filmcity Tours",
        date: "25, March, 2017",
        venue: "Sahara Rose Club",
        detail: "High Street"
    }, {
        image: "img/video/5.jpg",
        title: "KidZania Inn",
        date: "25, March, 2018",
        venue: "Sahara Rose Club",
        detail: "Low Street"
    }];

    // $http.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=SQSProject&key=AIzaSyBcHbwhmLeZdOYgIhmZlpmQ_Rg2F40V3OU')
    //   .success( function (data) {
    //     console.log(data);
    //   })
    //   .error( function (err) {
    //     console.log(err);
    //   });

    // $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippe&key=AIzaSyBcHbwhmLeZdOYgIhmZlpmQ_Rg2F40V3OU')
    //       .success( function (data) {
    //         console.log(data);
    //       })
    //       .error( function (err) {
    //         console.log(err);
    //       });

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
    showloading();

    $scope.searchedVideos = [];
    // MyServices.getsearchresults("mtv unplugged",
    //     function(data) {
    //         if (data) {
    //             // $ionicLoading.hide();
    //             console.log(data);
    //             $scope.searchedVideos = data.items;
    //         }
    //     },
    //     function(err) {
    //         if (err) {
    //             // $ionicLoading.hide();
    //             console.log(err);
    //         }
    //     });

    MyServices.getPopularVideos(
        function(data) {
            if (data) {
                // $ionicLoading.hide();
                console.log(data);
                $scope.searchedVideos = data.items;
            }
        },
        function(err) {
            if (err) {
                // $ionicLoading.hide();
                console.log(err);
            }
        });

    // MyServices.getPlaylistById(
    //     function(data) {
    //         if (data) {
    //             // $ionicLoading.hide();
    //             console.log(data);
    //             // $scope.searchedVideos = data.items;
    //         }
    //     },
    //     function(err) {
    //         if (err) {
    //             // $ionicLoading.hide();
    //             console.log(err);
    //         }
    //     });

    MyServices.getallevents(
        function(data) {
            if (data) {
                console.log(data);
                $scope.allEvents = data.queryresult;
            }
        },
        function(err) {
            if (err) {
                // $ionicLoading.hide();
                console.log(err);
            }
        });

    //    <div youtube code="items.videourl"></div>

    //***** end *****
})

.controller('LoginCtrl', function($scope, MyServices, $ionicLoading, $timeout) {

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };

    $scope.user = {};
    $scope.signIn = function() {
        $scope.allvalidation = [{
            field: $scope.user.email,
            validation: ""
        }, {
            field: $scope.user.password,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            showloading();
            console.log($scope.user);
            MyServices.signIn($scope.user,
                function(data) {
                    if (data) {
                        $ionicLoading.hide();
                        console.log(data);
                        MyServices.setUser(data);
                        $location.url("/app/home");
                    }
                },
                function(err) {
                    if (err) {
                        $ionicLoading.hide();
                        console.log(err);
                    }
                });
        }
    }

})

.controller('SignupCtrl', function($scope, MyServices, $ionicLoading, $timeout, $location, $ionicPopup) {

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };

    $scope.user = {};
    $scope.signUp = function() {
        $scope.allvalidation = [{
            field: $scope.user.fname,
            validation: ""
        }, {
            field: $scope.user.lname,
            validation: ""
        }, {
            field: $scope.user.email,
            validation: ""
        }, {
            field: $scope.user.password,
            validation: ""
        }, {
            field: $scope.user.counrycode,
            validation: ""
        }, {
            field: $scope.user.contact,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            showloading();
            $scope.user.name = $scope.user.fname + " " + $scope.user.lname;
            $scope.user.contact = $scope.user.counrycode + $scope.user.contact;
            console.log($scope.user);

            MyServices.signUp($scope.user, function(data) {
                    if (data) {
                        if (data != 'false') {
                            $ionicLoading.hide();
                            console.log(data);
                            MyServices.setUser(data);
                            $location.url("/app/home");
                        } else {
                            $ionicLoading.hide();
                            var alertPopup = $ionicPopup.alert({
                                title: '<h4>Email id already registered</h4>',
                            });
                        }
                    }
                },
                function(err) {
                    if (err) {
                        $ionicLoading.hide();
                        console.log(err);
                    }
                })
        }
    }

})

.controller('VideoCtrl', function($scope) {

})

.controller('PickedCtrl', function($scope, $stateParams, $http, MyServices, $ionicLoading, $timeout, $filter) {

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
    showloading();

    $scope.pickedVideos = [];
    $scope.fetchVideosFromYoutube = function(videoId) {
        showloading();
        console.log(videoId);
        MyServices.getSingleVideoDetail(videoId, function(data) {
            if (data) {
                console.log(data);
                $scope.pickedVideos.push(data.items[0]);
                $ionicLoading.hide();
            }
        }, function(err) {
            if (err) {
                console.log(err);
                $ionicLoading.hide();
            }
        });
    };

    MyServices.getPickedVideos(function(data) {
        if (data) {
            console.log(data);
            _.each(data.queryresult, function(n) {
                $scope.fetchVideosFromYoutube(n.url);
            })
        }
    }, function(err) {
        if (err) {
            console.log(err);
        }
    })

})

.controller('GalleryCtrl', function($scope, $ionicScrollDelegate, $stateParams, $http, MyServices, $ionicLoading, $timeout, $filter) {
    $scope.gallery = [{
        image: "img/video/2.jpg",
        title: "Weedeo's snowdown Photos"
    }, {
        image: "img/video/8.jpg",
        title: "Gaming Photos"
    }, {
        image: "img/video/4.jpg",
        title: "Music Photos"
    }, {
        image: "img/video/3.jpg",
        title: "Movies official trailer Gaming Photos"
    }];

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
    showloading();

    MyServices.getallphotogallerycategory(
        function(data) {
            if (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.allGalleryCategory = data.queryresult;
            }
        },
        function(err) {
            if (err) {
                $ionicLoading.hide();
                console.log(err);
            }
        });

})

.controller('GalleryInnerCtrl', function($scope, $ionicScrollDelegate, $stateParams, $http, MyServices, $ionicLoading, $timeout, $filter) {

    $scope.items = [{

            "src": 'img/video/1.png',
        }, {
            "src": 'img/video/2.jpg',
        }, {
            "src": 'img/video/3.jpg',
        }, {
            "src": 'img/video/4.jpg',
        }, {
            "src": 'img/video/5.jpg',
        }, {
            "src": 'img/video/6.jpg',
        }]
        //$scope.items = _.chunk($scope.items, 3);

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
    showloading();

    $scope.photogallery = [];
    MyServices.getallphotogallery($stateParams.id,
        function(data) {
            if (data) {
                _.each(data.queryresult, function(n) {
                    $scope.photogallery.push({
                        src: adminimage + n.src
                    });
                })
                console.log(data);
                $ionicLoading.hide();
            }
        },
        function(err) {
            if (err) {
                $ionicLoading.hide();
                console.log(err);
            }
        });
})

.controller('NotificationCtrl', function($scope) {

})

.controller('SettingCtrl', function($scope, $stateParams, MyServices, $ionicLoading, $timeout, $filter, $ionicPopup) {

    $scope.userDetails = MyServices.getUser();
    console.info($scope.userDetails);
    if ($scope.userDetails.name.indexOf(" ") != -1) {
        var splitted = $scope.userDetails.name.split(" ");
        $scope.userDetails.fname = splitted[0];
        $scope.userDetails.lname = splitted[1];
    }
    if ($scope.userDetails.contact.length > 10) {
        $scope.userDetails.countrycode = $scope.userDetails.contact.substr(0, ($scope.userDetails.contact.length - 10));
        $scope.userDetails.contact = $scope.userDetails.contact.substr(($scope.userDetails.contact.length - 10));
    }
    $scope.userDetails.dob = new Date($scope.userDetails.dob);

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };

    $scope.editProfile = function() {
        showloading();
        $scope.userDetails.name = $scope.userDetails.fname + " " + $scope.userDetails.lname;
        $scope.userDetails.contact = $scope.userDetails.countrycode + $scope.userDetails.contact;
        $scope.userDetails.dob = $filter('date')($scope.userDetails.dob, "dd-MM-yyyy");
        MyServices.editProfile($scope.userDetails,
            function(data) {
                if (data) {
                    $ionicLoading.hide();
                    console.log(data);
                    MyServices.setUser(data);
                    var alertPopup = $ionicPopup.alert({
                        title: '<h4>Profile Updated</h4>',
                    });
                }
            },
            function(err) {
                if (err) {
                    $ionicLoading.hide();
                    console.log(err);
                }
            })
    }

})

.controller('ProfileCtrl', function($scope) {

})

.controller('EventdetailCtrl', function($scope, $stateParams, MyServices, $ionicLoading, $timeout) {

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
    showloading();

    MyServices.getsingleevents($stateParams.id,
        function(data) {
            if (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.eventDetail = data;
            }
        },
        function(err) {
            if (err) {
                $ionicLoading.hide();
                console.log(err);
            }
        })

})

.controller('PlaylistCtrl', function($scope, MyServices, $ionicLoading, $timeout) {
    $scope.playlist = [{
        image: "img/video/2.jpg",
        title: "Weedeo's snowdown Videos",
        video: "42",
        view: "64"
    }, {
        image: "img/video/8.jpg",
        title: "Gaming Videos",
        video: "45",
        view: "655"
    }, {
        image: "img/video/4.jpg",
        title: "Music Trailor",
        video: "9",
        view: "4242"
    }, {
        image: "img/video/3.jpg",
        title: "Movies official trailer Gaming Videos",
        video: "18",
        view: "648"
    }];

    $scope.playlistArray = ['PLcm_sbf1ZgNkBd--g7r0Ihlo65M90DSLf',
        'PLcm_sbf1ZgNlHhi3wcRJCFufD6-AElxoP',
        'PLhYdRzceVuzZjJgVTnSv-x1iwn84KMiR2',
        'PLhYdRzceVuzYFPoxlwyaRkVO8abmm_uQH'
    ];

    $scope.playlist = [];
    var i = 0;
    _.each($scope.playlistArray, function(playlistId) {
        MyServices.getPlaylistById(playlistId,
            function(data) {
                if (data) {
                    // $ionicLoading.hide();
                    // console.log(data);
                    $scope.playlist.push(data);
                    getChannelDetails(i, data.items[0].snippet.channelId);
                    i++;
                    console.log($scope.playlist);
                }
            },
            function(err) {
                if (err) {
                    // $ionicLoading.hide();
                    console.log(err);
                }
            });
    })


    function getChannelDetails(count, channelId) {
        MyServices.getChannelDetails(channelId,
            function(data) {
                if (data) {
                    // $ionicLoading.hide();
                    // console.log(data);
                    $scope.playlist[count].channelDetails = data.items[0];
                }
            },
            function(err) {
                if (err) {
                    // $ionicLoading.hide();
                    console.log(err);
                }
            });

    }

})


.controller('VideodetailCtrl', function($scope, $ionicModal, $timeout, $stateParams, MyServices, $ionicScrollDelegate, $ionicLoading, $timeout) {

    // $scope.video = [{
    //     image: "img/video/2.jpg",
    //     title: "Weedeo's snowdown official trailer",
    //     cat: "Movie Clip",
    //     view: "64"
    // }, {
    //     image: "img/video/3.jpg",
    //     title: "Weedeo's Blackhat official trailer",
    //     cat: "Movie trailer Clip",
    //     view: "655"
    // }, {
    //     image: "img/video/4.jpg",
    //     title: "Music Concert",
    //     cat: "Media & Entertainment",
    //     view: "4242"
    // }, {
    //     image: "img/video/5.jpg",
    //     title: "Weedeo's Music Concert",
    //     cat: "Music Trailor",
    //     view: "648"
    // }];

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };

    $scope.video = {};
    $scope.refresh = function(videoId) {
        showloading();
        $scope.video.id = videoId;
        MyServices.getSingleVideoDetail(videoId, function(data) {
            if (data) {
                console.log(data);
                $scope.videoDetails = data.items[0];
            }
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });

        MyServices.getRelatedVideos(videoId, function(data) {
            if (data) {
                // $scope.relatedVideos = data.items;
                _.each(data.items, function(n) {
                    MyServices.getSingleVideoDetail(n.id.videoId, function(videodata) {
                        if (videodata) {
                            n.statistics = videodata.items[0].statistics;
                        }
                    }, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                })
                console.log(data);
                $scope.relatedVideos = data.items;
            }
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });
        $ionicScrollDelegate.scrollTop();
    }

    $scope.refresh($stateParams.id);

})

.controller('PlaylistvideoCtrl', function($scope, $ionicModal, $timeout) {

        $scope.video = [{
            image: "img/video/2.jpg",
            title: "Weedeo's snowdown official trailer",
            cat: "Movie Clip",
            view: "64"
        }, {
            image: "img/video/3.jpg",
            title: "Weedeo's Blackhat official trailer",
            cat: "Movie trailer Clip",
            view: "655"
        }, {
            image: "img/video/4.jpg",
            title: "Music Concert",
            cat: "Media & Entertainment",
            view: "4242"
        }, {
            image: "img/video/5.jpg",
            title: "Weedeo's Music Concert",
            cat: "Music Trailor",
            view: "648"
        }];






    })
    .controller('FeedCtrl', function($scope, $ionicScrollDelegate, $stateParams) {
        //        ***** tabchange ****

        $scope.tab = 'twitter';
        $scope.classa = 'active';
        $scope.classb = '';

        $scope.tabchange = function(tab, a) {
            //        console.log(tab);
            $scope.tab = tab;
            if (a == 1) {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = "active";
                $scope.classb = '';
                $scope.classc = '';
            } else if (a == 2) {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = '';
                $scope.classb = "active";
                $scope.classc = '';
            } else {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active";
            }
        };


        //            ******** end *******

    })
    .controller('BioCtrl', function($scope) {

    })


.controller('EventCtrl', function($scope, $stateParams, MyServices, $ionicLoading, $timeout) {


    //    ******* custom json ******

    var showloading = function() {
        $ionicLoading.show({
            template: '<img src="img/ring-alt.gif">'
        });
        $timeout(function() {
            $ionicLoading.hide();
        }, 3000);
    };
    showloading();

    $scope.video = [{
        image: "img/video/2.jpg",
        title: "Disnei Beauty and the Beast",
        date: "25, March, 2015",
        venue: "Royal Rose Club",
        detail: "Alpherta CA"
    }, {
        image: "img/video/3.jpg",
        title: "Bollywud Dream Tours",
        date: "25, March, 2016",
        venue: "Sahara Rose Club",
        detail: "Athens GA"
    }, {
        image: "img/video/4.jpg",
        title: "Mumbai Filmcity Tours",
        date: "25, March, 2017",
        venue: "Sahara Rose Club",
        detail: "High Street"
    }, {
        image: "img/video/5.jpg",
        title: "KidZania Inn",
        date: "25, March, 2018",
        venue: "Sahara Rose Club",
        detail: "Low Street"
    }];

    MyServices.getallevents(
        function(data) {
            if (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.allEvents = data.queryresult;
            }
        },
        function(err) {
            if (err) {
                $ionicLoading.hide();
                console.log(err);
            }
        });

    //***** end *****
});
