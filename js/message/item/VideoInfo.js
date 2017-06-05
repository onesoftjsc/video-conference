/**
 * Created by phamquan on 5/28/17.
 */
ibigfox.provide('vvconference.message.item.VideoInfo');

ibigfox.require('vvconference.message.common.Tags');
ibigfox.require('bigfox.core.DataTypes');

vvconference.message.item.VideoInfo = function(index, sessionId){
    this.TypeMap = {
        index: bigfox.core.DataTypes.INT,
        sessionId: bigfox.core.DataTypes.STRING
    }
    this.index = index;
    this.sessionId = sessionId;
}