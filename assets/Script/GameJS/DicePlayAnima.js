var ANIMATION_NUMBER = 4;

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let anim = this.getComponent (cc.Animation);
        var animNumber = Math.floor (( Math.random () * 10 ) % ANIMATION_NUMBER + 1);
        anim.play ("DiceThrow" + animNumber);

        anim.on ("finished", function () {
            this.node.destroy ();
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
