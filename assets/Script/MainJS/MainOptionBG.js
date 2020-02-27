
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        cc.director.on ('OptionUsed', this.OptionUsed, this);

    },

    OptionUsed () {
        var anim = this.getComponent (cc.Animation);

        anim.play ('Option');
    },

    start () {

    },

    // update (dt) {},
});
