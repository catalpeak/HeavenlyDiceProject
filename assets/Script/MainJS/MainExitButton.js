
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let windowSize=cc.view.getVisibleSize();
        this.node.setPosition (windowSize.width / 7 * 2, -210, 0);
    },

    start () {

    },

    // update (dt) {},
});
