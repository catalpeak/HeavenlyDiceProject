
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {


    },

    ReturnMain () {
        cc.director.loadScene ("main");
    },

    DestroyThisNode () {
        this.node.destroy ();
    },

    start () {

    },

    // update (dt) {},
});
