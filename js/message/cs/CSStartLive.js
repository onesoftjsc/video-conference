/**
 * Created by phamquan on 5/28/17.
 */
ibigfox.provide('vvconference.message.cs.CSStartLive');

ibigfox.require('vvconference.message.common.Tags');

vvconference.message.cs.CSStartLive = function(){
    this.TypeMap = {};
    this.name = "CSStartLive";
    this.service = vtags.CS_START_LIVE;
}
ibigfox.inherits('vvconference.message.cs.CSStartLive', 'bigfox.network.message.base.BaseMessage');
