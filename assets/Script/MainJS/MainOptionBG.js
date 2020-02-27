
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // Option Menu should be closed by up slide

    onLoad () {

        var anim = this.getComponent (cc.Animation); // Get this node's Animation list

        cc.director.on ('OptionUsed', function () {
            anim.play ("OptionDown");
            this.node.setPosition (0, 0);
        }, this); // 响应Option，弹出Option窗口，锁死main的全部按钮

        // 判断滑动
        var firstX = null;
        var firstY = null;

        this.node.on (cc.Node.EventType.TOUCH_START, function (event) {
            let location = event.getLocation ();
            this.firstX = location.x;
            this.firstY = location.y;
        }, this);

        this.node.on (cc.Node.EventType.TOUCH_END  , function (event) {
            let touchPosition = event.getLocation ();
            let endX = this.firstX - touchPosition.x;
            let endY = this.firstY - touchPosition.y;
        
            if (endY < -230 && Math.abs (endX) < 100) { // Current Slip direction is up
                // Option Menu Should be closed and send message to all node

                cc.director.emit ("OptionIsClosed", "Option Menu is used which should be closed and tell orther nodes to interaction");

                anim.play ('OptionUp');
                this.node.setPosition (0, 2000);
                //this.node.
            }
        }, this);

    },

    start () {

    },

    // update (dt) {},
});
