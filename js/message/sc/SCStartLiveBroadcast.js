/**
 * Created by phamquan on 5/28/17.
 */
ibigfox.provide('vvconference.message.sc.SCStartLiveBroadcast');

ibigfox.require('vvconference.message.common.Tags');
ibigfox.require('bigfox.core.DataTypes');

vvconference.message.sc.SCStartLiveBroadcast = function () {
    this.TypeMap = {
        index: bigfox.core.DataTypes.INT,
        sessionId: bigfox.core.DataTypes.STRING
    }

    this.name = "SCStartLiveBroadcast";
    this.service = vtags.SC_START_LIVE_BROADCAST;
}

ibigfox.inherits('vvconference.message.sc.SCStartLiveBroadcast', 'bigfox.network.message.base.BaseMessage');

vvconference.message.sc.SCStartLiveBroadcast.prototype.execute = function () {
    if (this.bfConnect.sessionId == this.sessionId)
       vvcService.startLive(this.index, this.sessionId);
    else
        vvcService.startView(this.index, this.sessionId);
}