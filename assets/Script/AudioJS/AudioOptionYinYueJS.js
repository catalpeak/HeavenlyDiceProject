

cc.Class({
    extends: cc.Component,

    properties: {
        MusicCheckBox : {
            default : null,
            type : cc.Toggle
        },

        MusicSlider : {
            default : null,
            type : cc.Slider
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var audioPlay = cc.find ("Audio").getComponent ("AudioManagerJS");
        var nowVolume = audioPlay.getVolume ();
        if (nowVolume === 0.0) {
            this.MusicCheckBox.isChecked = false;
        } else if (nowVolume > 0.0 && nowVolume <= 1.0) {
            this.MusicCheckBox.isChecked = true;
        } else {
            cc.log ("In AudioOptionYinYueJS.js : Audio Volume is illegle");
        }
    },

    start () {

    },

    setMusicMute () { // 按照复选框的选择开关音量 但是音乐继续播放
        let CheckBoxSelected = this.MusicCheckBox.isChecked;
        var audioPlay = cc.find ("Audio").getComponent ("AudioManagerJS");
        if (CheckBoxSelected) {
            audioPlay.initVolume ();
            this.MusicSlider.progress = 0.5;
        } else {
            audioPlay.setMute ();
            this.MusicSlider.progress = 0;
        }
    },


    // update (dt) {},
});
