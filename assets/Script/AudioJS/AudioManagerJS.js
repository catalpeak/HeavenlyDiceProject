cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic:{
            type : cc.AudioClip,
            default: null
        },

        ButtonMusic : {
            type : cc.AudioClip,
            default : null
        },

        EffecMusicVolume : {
            default : null,
            type : cc.Slider
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////// Effect Functions ////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    playEffectMusic_Button () {
        this.effectMusicChannel = cc.audioEngine.play (this.ButtonMusic, false, this.EffecMusicVolume.progress);
    },

    setEffectVoice (_volume) {
        if (_volume >= 0.0 && _volume <= 1.0) {
            this.EffecMusicVolume.progress = _volume;
        } else {
            cc.log ("In Function AudioManagerJS.js : Function setEffectvoice paramter _volume is illegal");
        }
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////// BGM Functions /////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    playBgMusic () {
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

