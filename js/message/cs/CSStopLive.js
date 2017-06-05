/**
 * Created by phamquan on 5/28/17.
 */
ibigfox.provide('vvconference.message.cs.CSStopLive');

ibigfox.require('vvconference.message.common.Tags');

vvconference.message.cs.CSStopLive = function(){
    this.TypeMap = {};
    this.name = "CSStopLive";
    this.service = vtags.CS_STOP_LIVE;
}

ibigfox.inherits('vvconference.message.cs.CSStopLive', 'bigfox.network.message.base.BaseMessage');
