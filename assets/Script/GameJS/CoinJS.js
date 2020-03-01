
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let windowSize=cc.view.getVisibleSize();
        this.node.setPosition (windowSize.width / 4 + 180, 0);

        cc.director.on ("ChooseSecondIsTouched", function () {
            let anim = this.getComponent (cc.Animation);
            anim.play ("CoinAnimPosition");
        }, this);

        cc.director.on ("ChooseFirstIsTouched", function () {
            let anim = this.getComponent (cc.Animation);
            anim.play ("CoinAnimTheOtherSide");
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
