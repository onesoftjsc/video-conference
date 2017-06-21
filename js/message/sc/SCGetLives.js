/**
 * Created by phamquan on 5/28/17.
 */

ibigfox.provide('vvconference.message.sc.SCGetLives');

ibigfox.require('vvconference.message.common.Tags');
ibigfox.require('bigfox.core.DataTypes');

vvconference.message.sc.SCGetLives = function(){
    this.TypeMap = {
        videoInfos: bigfox.core.DataTypes.ARRAY_OBJECT
    }

    this.name = "SCGetLives";
    this.service = vtags.SC_GET_LIVES;
}

ibigfox.inherits('vvconference.message.sc.SCGetLives', 'bigfox.network.message.base.BaseMessage');

vvconference.message.sc.SCGetLives.prototype.execute = function(){
    for(var index in this.videoInfos){
        var videoInfo = this.videoInfos[index];
        vvcService.startView(videoInfo.index, videoInfo.sessionId);
    }

}