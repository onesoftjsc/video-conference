/**
 * Created by phamquan on 5/28/17.
 */
ibigfox.provide('vvconference.message.cs.CSGetLives');

ibigfox.require('bigfox.network.message.base.BaseMessage');
ibigfox.require('vvconference.message.common.Tags');

vvconference.message.cs.CSGetLives = function(time){
    this.TypeMap = {};
    this.name = "CSGetLives";
    this.service = vtags.CS_GET_LIVES ;
}

ibigfox.inherits('vvconference.message.cs.CSGetLives', 'bigfox.network.message.base.BaseMessage');