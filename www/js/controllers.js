angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    })
    .controller('HomeCtrl', function ($scope, $ionicScrollDelegate, $stateParams) {

        //        ***** tabchange ****

        $scope.tab = 'latest';
        $scope.classa = 'active';
        $scope.classb = '';
        $scope.classc = '';
        $scope.tabchange = function (tab, a) {
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
    .controller('LoginCtrl', function ($scope) {

    })
    .controller('SignupCtrl', function ($scope) {

    })

.controller('VideoCtrl', function ($scope) {

    })
    .controller('PickedCtrl', function ($scope) {

    })
    .controller('GalleryCtrl', function ($scope) {

    })
    .controller('NotificationCtrl', function ($scope) {

    })
    .controller('SettingCtrl', function ($scope) {

    })
    .controller('ProfileCtrl', function ($scope) {

    })
    .controller('EventdetailCtrl', function ($scope) {

    })
    .controller('PlaylistCtrl', function ($scope) {

    })
    .controller('VideodetailCtrl', function ($scope, $ionicModal, $timeout) {

        $ionicModal.fromTemplateUrl('templates/videoinfo.html', function ($ionicModal) {
            $scope.modal = $ionicModal;
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: $scope,
            // The animation we want to use for the modal entrance
            animation: 'slide-in-up'
        });


        $scope.openModal = function () {
            console.log('Opening Modal');
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            console.log('close Modal');
            $scope.modal.hide();
        };








    })
    .controller('FeedCtrl', function ($scope, $ionicScrollDelegate, $stateParams) {
        //        ***** tabchange ****

        $scope.tab = 'twitter';
        $scope.classa = 'active';
        $scope.classb = '';

        $scope.tabchange = function (tab, a) {
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
    .controller('BioCtrl', function ($scope) {

    })


.controller('EventCtrl', function ($scope, $stateParams) {});