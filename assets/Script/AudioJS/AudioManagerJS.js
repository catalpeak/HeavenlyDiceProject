cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic:{
            type : cc.AudioClip,
            default: null
        },
    },

    onLoad() {
        cc.game.addPersistRootNode(this.node);
    },

    /*
    start () {
        this.stopBgMusic ();
        this.playBgMusic ();
    },
    /* */

    playBgMusic() {
       this.bgMusicChannel = cc.audioEngine.play(this.bgMusic,true,0.5)
    },

    stopBgMusic: function () {        
        if (this.bgMusicChannel !== undefined) {
            cc.audioEngine.stop(this.bgMusicChannel);            
            this.bgMusicChannel = undefined;
        }
    },

    setMusicVoice (_volume) {
        cc.audioEngine.setVolume (this.bgMusicChannel, _volume);
    },

    setMute () { // 静音
        cc.audioEngine.setVolume (this.bgMusicChannel, 0);
    },

    initVolume () {
        cc.audioEngine.setVolume (this.bgMusicChannel, 0.5);
    },

    getVolume () {
        return cc.audioEngine.getVolume ();
    },

});

