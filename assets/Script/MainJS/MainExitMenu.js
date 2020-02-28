
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var anim = this.getComponent (cc.Animation);
        cc.log (anim);
        cc.director.on ("ExitMenu", function () {
            anim.play ("ExitMenuUp");
        }, this);
    },

    start () {

    },

    ExitGame () {
        cc.find ("Audio").getComponent ("AudioManagerJS").playEffectMusic_Button ();
        cc.game.end();
    },

    CancelExitGame () {
        cc.find ("Audio").getComponent ("AudioManagerJS").playEffectMusic_Button ();
        var anim = this.getComponent (cc.Animation);
        anim.play ("ExitMenuDown");
    },

    // update (dt) {},
});
