

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let anim = this.getComponent (cc.Animation);
        anim.play ();
    },

    start () {

    },

    // update (dt) {},
});
