angular.module('starter.controllers', ['ion-gallery'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

	})
	.controller('HomeCtrl', function ($scope, $ionicScrollDelegate, $stateParams) {

		//        ***** tabchange ****

		$scope.tab = 'video';
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

		//***** end *****

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

	})

.controller('GalleryInnerCtrl', function ($scope) {

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
		}
				   ]
		//$scope.items = _.chunk($scope.items, 3);
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


	})
	.controller('VideodetailCtrl', function ($scope, $ionicModal, $timeout) {

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
	.controller('PlaylistvideoCtrl', function ($scope, $ionicModal, $timeout) {

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


.controller('EventCtrl', function ($scope, $stateParams) {


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

	//***** end *****
});