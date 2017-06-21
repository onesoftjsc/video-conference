/**
 * Created by phamquan on 6/2/17.
 */
ibigfox.provide('vvconference.message.sc.SCStartKaraoke');

ibigfox.require('vvconference.message.common.Tags');
ibigfox.require('bigfox.core.DataTypes');

vvconference.message.sc.SCStartKaraoke = function(){
    this.TypeMap = {
        time: bigfox.core.DataTypes.INT
    }

    this.name = "SCStartKaraoke";
    this.service = vtags.SC_START_KARAOKE;
}

ibigfox.inherits('vvconference.message.sc.SCStartKaraoke', 'bigfox.network.message.base.BaseMessage');

vvconference.message.sc.SCStartKaraoke.prototype.execute = function(){
    //document.getElementById('stth').volume = 0.5;
    //document.getElementById('stth').currentTime = this.time;
    //document.getElementById('stth').play();
}