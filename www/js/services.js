var adminbase = "http://localhost/youtube/";

var adminurl = adminbase + "index.php/json/";
var adminimage = adminbase + "uploads/";
var adminhauth = adminbase + "index.php/hauth/";
var imgpath = adminimage + "image?name=";

var apiKey = "AIzaSyBcHbwhmLeZdOYgIhmZlpmQ_Rg2F40V3OU";

angular.module('starter.services', [])

.factory('MyServices', function($http, $window) {
    return {
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveUser: function(data, callback) {
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getPopularVideos: function(callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    key: apiKey,
                    chart: 'mostPopular',
                    type: 'video',
                    maxResults: '10',
                    part: 'id,snippet'
                }
            }).success(callback).error(err)

        },
        getsearchresults: function(search, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: apiKey,
                    type: 'video',
                    maxResults: '10',
                    part: 'id,snippet',
                    q: search
                }
            }).success(callback).error(err)
        },
        getSingleVideoDetail: function(videoId, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    id: videoId,
                    key: apiKey,
                    part: 'snippet,statistics'
                }
            }).success(callback).error(err)
        },
        getRelatedVideos: function(videoId, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    relatedToVideoId: videoId,
                    key: apiKey,
                    type: 'video',
                    part: 'id,snippet'
                }
            }).success(callback).error(err)
        },
        getPlaylistById: function(playlistId, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params: {
                    maxResults: '10',
                    playlistId: playlistId,
                    key: apiKey,
                    part: 'id,snippet,contentDetails'
                }
            }).success(callback).error(err)
        },
        searchChannels: function(callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: apiKey,
                    type: 'channel',
                    part: 'snippet',
                    q: 'sanam'
                }
            }).success(callback).error(err)
        },
        getChannelDetails: function(channelId, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/channels', {
                params: {
                    key: apiKey,
                    id: channelId,
                    part: 'id,snippet,contentDetails,statistics'
                }
            }).success(callback).error(err)
        },
        getPickedVideos: function(callback, err) {
            $http.get(adminurl + "getallpickedvideos").success(callback).error(err)
        },
        getallevents: function(callback, err) {
            $http.get(adminurl + "getallevents").success(callback).error(err)
        },
        getsingleevents: function(eventId, callback, err) {
            $http.get(adminurl + "getsingleevents?id=" + eventId).success(callback).error(err)
        },
        getallphotogallerycategory: function(callback, err) {
            $http.get(adminurl + "getallphotogallerycategory").success(callback).error(err)
        },
        getallphotogallery: function(galleryId, callback, err) {
            $http.get(adminurl + "getallphotogallery?id=" + galleryId).success(callback).error(err)
        },
        editProfile: function(userData, callback, err) {
            $http({
                url: adminurl + 'editprofile',
                method: 'POST',
                data: userData
            }).success(callback).error(err);
        },
        signUp: function(userData, callback, err) {
            $http({
                url: adminurl + 'signUp',
                method: 'POST',
                data: userData
            }).success(callback).error(err);
        },
        signIn: function(userData, callback, err) {
            $http({
                url: adminurl + 'signIn',
                method: 'POST',
                data: userData
            }).success(callback).error(err);
        },
        setUser: function(data) {
            $.jStorage.set("user", data);
        },
        getUser: function() {
            return $.jStorage.get("user");
        }
    };

});
