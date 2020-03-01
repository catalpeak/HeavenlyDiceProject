
cc.Class({
    extends: cc.Component,

    properties: {
        StartChoosePrefab : {
            default : null,
            type : cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let StartChoose = cc.instantiate (this.StartChoosePrefab);
        StartChoose.parent = this.node;
        StartChoose.setPosition (0, 0);
    },

    start () {

    },

    // update (dt) {},
});
