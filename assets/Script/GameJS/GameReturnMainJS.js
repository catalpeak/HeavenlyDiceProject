

cc.Class({
    extends: cc.Component,

    properties: {
        ReturnWindow : {
            default : null,
            type : cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // Set this node position
        let windowSize = cc.view.getVisibleSize ();
        this.node.setPosition (50 - windowSize.width / 2, windowSize.height / 2 - 50, 0);
    },

    createReturnMenu () {
        let returnMenu = cc.instantiate (this.ReturnWindow);
        returnMenu.parent = this.node.parent;
        returnMenu.setPosition (0, 0);
    },
/*
    start () {

    },
*/
    // update (dt) {},
});
