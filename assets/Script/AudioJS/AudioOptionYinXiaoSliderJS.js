
cc.Class({
    extends: cc.Component,

    properties: {
        MusicContorlSlider : {
            default : null,
            type : cc.Slider
        },

        MusicCheckBox : {
            default : null,
            type : cc.Toggle
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    MusicContorlBySlider () {
        if (this.MusicContorlSlider.progress > 0.0 && this.MusicContorlSlider.progress <= 1.0) {
            this.MusicCheckBox.isChecked = true;
        } else if (this.MusicContorlSlider.progress === 0.0) {
            this.MusicCheckBox.isChecked = false;
        }
    },

    // update (dt) {},
});
