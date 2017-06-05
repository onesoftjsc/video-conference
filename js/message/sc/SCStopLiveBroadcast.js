/**
 * Created by phamquan on 5/28/17.
 */
ibigfox.provide('vvconference.message.sc.SCStopLiveBroadcast');

ibigfox.require('vvconference.message.common.Tags');
ibigfox.require('bigfox.core.DataTypes');

vvconference.message.sc.SCStopLiveBroadcast = function(){
    this.TypeMap = {
        index: bigfox.core.DataTypes.INT,
        sessionId: bigfox.core.DataTypes.STRING
    }

    this.name = "SCStopLiveBroadcast";
    this.service = vtags.SC_STOP_LIVE_BROADCAST;
}

ibigfox.inherits('vvconference.message.sc.SCStopLiveBroadcast', 'bigfox.network.message.base.BaseMessage');

vvconference.message.sc.SCStopLiveBroadcast.prototype.execute = function(){
    vvcService.stopLive(this.index, this.sessionId);
}