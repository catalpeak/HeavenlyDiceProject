
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        // Random Dice Size
        this.node.scaleX  = 0.63 + Math.random () * 0.07;
        this.node.scaleY  = 0.63 + Math.random () * 0.07;

        // Random Dice rotation
        this.node.rotation = 360 * Math.random ();

        let isChoosed = false;
        // When Node is touched, send msg
        this.node.on ("touchend", function () {
            if (this.isChoosed) { // This Dice is choosed
                this.node.dispatchEvent (new cc.Event.EventCustom('Dice6IsCanceled', true));
                let anim = this.getComponent (cc.Animation);
                anim.play ("DiceChoosenSmall");
                this.isChoosed = false;
            } else {
                this.node.dispatchEvent (new cc.Event.EventCustom('Dice6IsChoosed', true));
                let anim = this.getComponent (cc.Animation);
                anim.play ("DiceChoosenBig");
                this.isChoosed = true;
            }
        }, this);
    },

    start () {

    },

    RetNumber () {
        return 6;
    },

    // update (dt) {},
});
