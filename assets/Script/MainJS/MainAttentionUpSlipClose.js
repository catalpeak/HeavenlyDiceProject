
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var anim = this.getComponent (cc.Animation);
        anim.play ("AttentionUpSlipdelose");
    },

    start () {

    },

    // update (dt) {},
});
