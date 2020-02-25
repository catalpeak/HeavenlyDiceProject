
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let windowSize=cc.view.getVisibleSize();
        //cc.log("width="+windowSize.width+",height="+windowSize.height);;
        windowSize=cc.winSize;

        cc.view.enableAntiAlias(true);
        cc.view.resizeWithBrowserSize(true);
    },

    start () {

    },

    // update (dt) {},
});
