cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.node.on (cc.Node.EventType.TOUCH_END, function (event) {
            let location = event.getLocation ();
            if (location.y > location.x * 15 / 64 + 205) {
                // others
                cc.director.emit ("ChooseFirstIsTouched", "others");
            } else {
                // Mine
                cc.director.emit ("ChooseSecondIsTouched", "Mine");
            }
            this.node.destroy ();
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
