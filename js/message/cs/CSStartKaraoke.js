/**
 * Created by phamquan on 6/2/17.
 */
ibigfox.provide('vvconference.message.cs.CSStartKaraoke');

ibigfox.require('vvconference.message.common.Tags');

vvconference.message.cs.CSStartKaraoke = function(){
    this.TypeMap = {};
    this.name = "CSStartKaraoke";
    this.service = vtags.CS_START_KARAOKE ;
}

ibigfox.inherits('vvconference.message.cs.CSStartKaraoke', 'bigfox.network.message.base.BaseMessage');