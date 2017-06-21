/**
 * Created by phamquan on 5/25/17.
 */

ibigfox.require('vivusdk');
ibigfox.require('vvconference.message.common.services');


$(document).ready(function () {
   var appId = $("meta[name='appId']").attr("content");
   ivivu.setDevice('selectaudio', 'selectvideo');

   ivivu.init(appId, function () {
      ivivu.authenticate(appId, function(){
         vvcService.init();
      });
   });

   ivivu.onVideoConnected = function(vplayer){
      for( var videoId in vplayer.parentIds){
         var video = vplayer.video.cloneNode(true);
         document.getElementById(vplayer.parentIds[videoId]).innerHTML = '';
         document.getElementById(vplayer.parentIds[videoId]).appendChild(video);
         video.load();
         video.play();
      }
   }

   ivivu.onVideoDisconnect = function(vplayer){
   }

});




