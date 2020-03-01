
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

        /*
        let ANIM = this.getComponent (cc.Animation);
        ANIM.on ("finished", function () {
            this.node.resumeSystemEvents(true);
        }, this);
        /* */

        let isChoosed = false;
        // When Node is touched, send msg
        this.node.on ("touchend", function () {
            if (this.isChoosed) { // This Dice is choosed
                this.node.dispatchEvent (new cc.Event.EventCustom('Dice1IsCanceled', true));
                let anim = this.getComponent (cc.Animation);
                anim.play ("DiceChoosenSmall");
                //this.node.pauseSystemEvents(true); // 实时证明，不让节点关闭也正常响应，待出现问题在考虑这块
                this.isChoosed = false;
            } else {
                this.node.dispatchEvent (new cc.Event.EventCustom('Dice1IsChoosed', true));
                let anim = this.getComponent (cc.Animation);
                anim.play ("DiceChoosenBig");
                //this.node.pauseSystemEvents(true); // 实时证明，不让节点关闭也正常响应，待出现问题在考虑这块
                this.isChoosed = true;
            }
        }, this);

    },

    start () {

    },

    RetNumber () {
        return 1;
    },

    // update (dt) {},
});
