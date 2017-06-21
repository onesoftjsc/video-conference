/**
 * Created by phamquan on 5/28/17.
 */

ibigfox.provide('vvconference.message.common.services');

ibigfox.basePath="../";

ibigfox.addPath('js/message/common/Tags.js', ['vvconference.message.common.Tags']);
ibigfox.addPath('js/message/cs/CSGetLives.js', ['vvconference.message.cs.CSGetLives']);
ibigfox.addPath('js/message/cs/CSStartLive.js', ['vvconference.message.cs.CSStartLive']);
ibigfox.addPath('js/message/cs/CSStopLive.js', ['vvconference.message.cs.CSStopLive']);
ibigfox.addPath('js/message/cs/CSStartKaraoke.js', ['vvconference.message.cs.CSStartKaraoke']);
ibigfox.addPath('js/message/cs/CSKaraokeLength.js', ['vvconference.message.cs.CSKaraokeLength']);

ibigfox.addPath('js/message/item/VideoInfo.js', ['vvconference.message.item.VideoInfo']);
ibigfox.addPath('js/message/sc/SCGetLives.js', ['vvconference.message.sc.SCGetLives']);
ibigfox.addPath('js/message/sc/SCStartLiveBroadcast.js', ['vvconference.message.sc.SCStartLiveBroadcast']);
ibigfox.addPath('js/message/sc/SCStopLiveBroadcast.js', ['vvconference.message.sc.SCStopLiveBroadcast']);
ibigfox.addPath('js/message/sc/SCStartKaraoke.js', ['vvconference.message.sc.SCStartKaraoke']);


ibigfox.resetBasePath();

ibigfox.require('vvconference.message.common.Tags');
ibigfox.require('vvconference.message.cs.CSGetLives');
ibigfox.require('vvconference.message.cs.CSStartLive');
ibigfox.require('vvconference.message.cs.CSStopLive');
ibigfox.require('vvconference.message.cs.CSStartKaraoke');
ibigfox.require('vvconference.message.cs.CSKaraokeLength');

ibigfox.require('vvconference.message.sc.SCGetLives');
ibigfox.require('vvconference.message.sc.SCStartLiveBroadcast');
ibigfox.require('vvconference.message.sc.SCStopLiveBroadcast');
ibigfox.require('vvconference.message.sc.SCStartKaraoke');

var vvcService = vvcService || {};
vvcService.init = function(){
    this.vConnect = new BFConnect($("meta[name=serverLogic]").attr("content"), 10000);

    var vConnect = this.vConnect;
    this.vConnect.mapServiceToMessage[vtags.CS_GET_LIVES] = vvconference.message.cs.CSGetLives;
    this.vConnect.mapServiceToMessage[vtags.CS_START_LIVE] = vvconference.message.cs.CSStartLive;
    this.vConnect.mapServiceToMessage[vtags.CS_STOP_LIVE] = vvconference.message.cs.CSStopLive;
    this.vConnect.mapServiceToMessage[vtags.CS_START_KARAOKE] = vvconference.message.cs.CSStartKaraoke;

    this.vConnect.mapServiceToMessage[vtags.SC_GET_LIVES] = vvconference.message.sc.SCGetLives;
    this.vConnect.mapServiceToMessage[vtags.SC_START_LIVE_BROADCAST] = vvconference.message.sc.SCStartLiveBroadcast;
    this.vConnect.mapServiceToMessage[vtags.SC_STOP_LIVE_BROADCAST] = vvconference.message.sc.SCStopLiveBroadcast;
    this.vConnect.mapServiceToMessage[vtags.SC_START_KARAOKE] = vvconference.message.sc.SCStartKaraoke;
    this.vConnect.mapServiceToMessage[vtags.CS_KARAOKE_LENGTH] = vvconference.message.cs.CSKaraokeLength;

    this.vConnect.onDisconnected = function(){}
    this.vConnect.onStartNewSession = function(){
        vConnect.send(new vvconference.message.cs.CSGetLives());
    };
    this.vConnect.start();
}


vvcService.startView = function(index, sessionId){
    var vplayer = ivivu.createNewVideo('view', sessionId);
    vplayer.addParent('cell' + (index + 1));
    vplayer.setResolution(720);
    vplayer.start();
}

vvcService.startLive = function(index, sessionId){
    var vplayer = ivivu.createNewVideo('live', sessionId);

    vplayer.addParent('cell' + (index + 1));
    $("#cell" + (index + 1)).css({"border-color": "red",
        "border-width":"4px",
        "border-style":"solid"});


    var audioSelect = document.getElementById('selectaudio');
    var videoSelect = document.getElementById('selectvideo');
    vplayer.setup({
        audioId: audioSelect.options[audioSelect.selectedIndex].value,
        videoId: videoSelect.options[videoSelect.selectedIndex].value,
        resolution: 720
    });
    vplayer.onConnected = function(){
        document.getElementById('button1').style.visibility = "hidden";;
    }
    vplayer.start();
}

vvcService.stopLive = function(index, sessionId){
    var vplayer = ivivu.mapLiveIdToViewIPlayer[sessionId];
    document.getElementById("cell" + (index + 1)).innerHTML = '';
}

vvcService.startVideo = function(){

    this.vConnect.send(new vvconference.message.cs.CSStartKaraoke());
    var i = setInterval(function() {
        var video = document.getElementById('stth');
        if(video.readyState > 0) {
            vvcService.vConnect.send(new vvconference.message.cs.CSKaraokeLength(Math.round(video.duration)));

            clearInterval(i);
        }
    }, 200);
}


vvcService.onclick = function(){
    this.vConnect.send(new vvconference.message.cs.CSStartLive());

}