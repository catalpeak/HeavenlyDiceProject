

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        let windowSize=cc.view.getVisibleSize();
        this.node.setPosition (windowSize.width / 7 * 2, 80, 0);
    },

    start () {

    },

    // update (dt) {},
});
