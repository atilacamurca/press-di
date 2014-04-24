'use strict';

angular.module('playlistApp')
   .factory('albumsList', function () {
      var albums = [
         {
            band: "Dream Theater",
            title: "Images And Words",
            year: 1992,
            songs: [
               {name: "Pull Me Under"},
               {name: "Another Day"},
               {name: "Take The Time"},
               {name: "Surrounded"},
               {name: "Metropolis"},
               {name: "Under A Glass Moon"},
               {name: "Wait For Sleep"},
               {name: "Learning To Live"}
            ]
         },
         {
            band: "Dream Theater",
            title: "Dream Theater",
            year: 2013,
            songs: [
               {name: "False Awakening Suite"},
               {name: "The Enemy Inside"},
               {name: "The Looking Glass"},
               {name: "Enigma Machine"},
               {name: "The Bigger Picture"},
               {name: "Behind The Veil"},
               {name: "Surrender To Reason"},
               {name: "Along For The Ride"},
               {name: "Illumination Theory"},
            ]
         },
         {
            band: "Dream Theater",
            title: "A Dramatic Turn Of Events",
            year: 2011,
            songs: [
               {name: "On The Backs Of Angels"},
               {name: "Build Me Up, Break Me Down"},
               {name: "Lost Not Forgotten"},
               {name: "This Is The Life"},
               {name: "Bridges In The Sky"},
               {name: "Outcry"},
               {name: "Far From Heaven"},
               {name: "Breaking All Illusions"},
               {name: "Beneath The Surface"},
            ]
         }
      ];
      
      function clone(obj) {
         return JSON.parse(JSON.stringify(obj));
      }

      return {
         all: function () {
            return albums;
         },
         find: function (song) {
            var len = albums.length;
            var albumsLike = [];
            for (var i = 0; i < len; i++) {
               var songs = clone(albums[i].songs);
               var songsLike = _.filter(songs, function (obj) {
                  return obj.name.toLowerCase().indexOf(song.toLowerCase()) !== -1;
               });
               
               if (songsLike.length > 0) {
                  var lenLike = albumsLike.push(clone(albums[i]));
                  albumsLike[lenLike - 1].songs = songsLike;
               }
            }
            return albumsLike;
         }
      };
   });