/**
 * Created by phamquan on 5/25/17.
 */

ibigfox.require('vivusdk');
ibigfox.require('vvconference.message.common.services');


$(document).ready(function () {
   var appId = $("meta[name='appId']").attr("content");
   ivivu.getInstance().init(appId, function () {
      ivivu.getInstance().authenticate(appId, function(){
         scanVideos();
         vvcService.init();
      });
   });

   ivivu.getInstance().onVideoConnected = function(vplayer){
      for( var videoId in vplayer.parentIds){
         var video = vplayer.video.cloneNode(true);
         document.getElementById(vplayer.parentIds[videoId]).innerHTML = '';
         document.getElementById(vplayer.parentIds[videoId]).appendChild(video);
         video.load();
         video.play();
      }
   }

   ivivu.getInstance().onVideoDisconnect = function(vplayer){
   }

});


function scanVideos() {
   $('.vivu-player-live').each(function (index) {
      var videoId = $(this).attr('id');
      ivivu.getInstance().attachVideo(videoId);
   });

   $('.vivu-player-view').each(function (index) {
      var videoId = $(this).attr('id');
      ivivu.getInstance().attachVideo(videoId);
   });

   $('.vivu-player-live').each(function (index) {
      var autostart = $(this).attr('autostart');
      var liveId = $(this).attr('liveId');
      if (autostart == 'true')
      ivivu.getInstance().mapLiveIdToLiveIPlayer[liveId].start();
   });

   $('.vivu-player-view').each(function (index) {
      var autostart = $(this).attr('autostart');
      var liveId = $(this).attr('liveId');
      if (autostart == 'true')
         ivivu.getInstance().mapLiveIdToViewIPlayer[liveId].start();
   });
}



