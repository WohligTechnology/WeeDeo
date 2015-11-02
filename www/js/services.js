// var adminbase = "http://192.168.0.102/youtube/";
var adminbase = "http://localhost/youtube/";
// var adminbase = "http://wohlig.co.in/youtube/";

var adminurl = adminbase + "index.php/json/";
var adminimage = adminbase + "uploads/";
var adminhauth = adminbase + "index.php/hauth/";
var imgpath = adminimage + "image?name=";

var apiKey = "AIzaSyAx9mqCCaF9Bp7AkatHxg9SVVfGxgVwohM";

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
        getLatestVideos: function(channelId, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: apiKey,
                    channelId: channelId,
                    part: 'id,snippet',
                    order: 'date',
                    maxResults: '10'
                }
            }).success(callback).error(err)

        },
        getserchresults: function(search, callback, err) {
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
        getSinglePlaylistById: function(playlistId, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params: {
                    maxResults: '10',
                    playlistId: playlistId,
                    key: apiKey,
                    part: 'id,snippet,contentDetails'
                }
            }).success(callback).error(err)
        },
        getMorePlaylistVideos: function(playlistId, nextPageToken, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params: {
                    maxResults: '10',
                    playlistId: playlistId,
                    key: apiKey,
                    pageToken: nextPageToken,
                    part: 'id,snippet,contentDetails'
                }
            }).success(callback).error(err)
        },
        getPlaylistByIds: function(playlistIds, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/playlists', {
                params: {
                    id: playlistIds,
                    key: apiKey,
                    part: 'id,snippet,contentDetails,player,status'
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
        getUsersChannel: function(channelId, callback, err) {
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
        getConfigDetails: function(callback, err) {
            $http.get(adminurl + "getConfigDetails").success(callback).error(err)
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
        authenticate: function(callback) {
            $http({
                url: adminurl + 'authenticate',
                method: 'POST'
            }).success(callback);
        },
        setUser: function(data) {
            $.jStorage.set("user", data);
        },
        getUser: function() {
            return $.jStorage.get("user");
        },
        setConfig: function(data) {
            $.jStorage.set("config", data);
        },
        getConfig: function() {
            return $.jStorage.get("config");
        }
    };

});
