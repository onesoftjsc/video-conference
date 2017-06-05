/**
 * Created by phamquan on 6/3/17.
 */
ibigfox.provide('vvconference.message.cs.CSKaraokeLength');

ibigfox.require('bigfox.network.message.base.BaseMessage');
ibigfox.require('vvconference.message.common.Tags');

vvconference.message.cs.CSKaraokeLength = function(totalTime){
    this.TypeMap = {
        totalTime: bigfox.core.DataTypes.INT
    };
    this.name = "CSKaraokeLength";
    this.totalTime = totalTime;
    this.service = vtags.CS_KARAOKE_LENGTH ;
}

ibigfox.inherits('vvconference.message.cs.CSKaraokeLength', 'bigfox.network.message.base.BaseMessage');