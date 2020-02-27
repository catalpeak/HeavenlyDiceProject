

cc.Class({
    extends: cc.Component,

    properties: {
        BG : {
            default : null,
            type : cc.Node
        },
        Label : {
            default : null,
            type : cc.Label
        },
    },

    onLoad () {
        let windowSize=cc.view.getVisibleSize();  // 获取手机窗口大小
        this.node.setPosition (windowSize.width / 7 * 2, -160, 0); // 设置游戏按钮位置

        this.BG.opacity = 0;
        this.Label.node.color = cc.color (255, 255, 255, 255); // 初始化按钮节点

        this.node.on ("touchstart", this.OnTouchStart, this);
        this.node.on ("touchcancel", this.OnTouchCancel, this);
        this.node.on ("touchend", this.OnTouchEnd, this);

        cc.director.on ('OptionUsed', this.OptionUsed, this); // When Option Menu is used , Start Button should be useless

        var DISABLE = false;
        cc.director.on ("OptionIsClosed", function () { // Cancel Button Lock
            this.DISABLE = false;    
        }, this);
    },

    start () {

    },

    OptionUsed () {
        this.DISABLE = true;
    },


    OnTouchStart () {
        if (this.DISABLE) {return;}
        this.BG.opacity = 100;
        this.Label.node.color = cc.color (0, 0, 0, 0);
    },

    OnTouchCancel () {
        if (this.DISABLE) {return;}
        this.BG.opacity = 0;
        this.Label.node.color = cc.color (255, 255, 255, 255);
    },

    OnTouchEnd () {
        if (this.DISABLE) {return;}
        this.BG.opacity = 0;
        this.Label.node.color = cc.color (255, 255, 255, 255);
    },

    // update (dt) {},
});
