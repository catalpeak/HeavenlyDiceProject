cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.node.on ("touchend", function () {
            cc.director.loadScene ("main");
            this.node.destroy ();
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
