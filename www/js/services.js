var adminurl = "http://192.168.2.22:1337/";
var adminurl = "http://wohlig.in:81/";
//var adminurl = "http://wohlig.com:81/";
//var adminurl = "http://localhost:1337/";
var imgpath = adminurl + "uploadfile/resize?file=";

angular.module('starter.services', [])

.factory('MyServices', function ($http, $window) {
    return {
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveUser: function (data, callback) {
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getsearchresults: function (search, callback, err) {
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: 'AIzaSyBcHbwhmLeZdOYgIhmZlpmQ_Rg2F40V3OU',
                    type: 'video',
                    maxResults: '4',
                    part: 'id,snippet',
                    fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                    q: search
                }
            }).success(callback).error(err)
        },
        setUser: function (data) {
            $.jStorage.set("user", data);
        },
        getUser: function () {
            return $.jStorage.get("user");
        }
    };

});