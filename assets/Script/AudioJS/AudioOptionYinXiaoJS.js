

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

    },

    start () {

    },

    setMusicMute () { // 按照复选框的选择开关音量 但是音乐继续播放
        let CheckBoxSelected = this.MusicCheckBox.isChecked;
        if (CheckBoxSelected) {
            this.MusicSlider.progress = 0.5;
        } else {
            this.MusicSlider.progress = 0;
            this.MusicCheckBox.isChecked = false;
        }
    },


    // update (dt) {},
});
