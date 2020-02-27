

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
        OptionTable : {
            default : null,
            type : cc.Node
        },
    },

    onLoad () {
        let windowSize=cc.view.getVisibleSize();  // 获取手机窗口大小
        this.node.setPosition (windowSize.width / 7 * 2, -110, 0); // 设置游戏按钮位置

        this.BG.opacity = 0;
        this.Label.node.color = cc.color (255, 255, 255, 255); // 初始化按钮节点

        this.node.on ("touchstart", this.OnTouchStart, this);
        this.node.on ("touchcancel", this.OnTouchCancel, this);
        this.node.on ("touchend", this.OnTouchEnd, this);

    },

    start () {

    },

    OnTouchStart () {
        this.BG.opacity = 100;
        this.Label.node.color = cc.color (0, 0, 0, 0);

        this.OptionTable.setPosition (0, 0); // Let OptionTable Show in View
        cc.director.emit ("OptionUsed", "Option is Used which should be placed in center and play animation"); // Tell Option Table : You have been Used
    },

    OnTouchCancel () {
        this.BG.opacity = 0;
        this.Label.node.color = cc.color (255, 255, 255, 255);

    },

    OnTouchEnd () {
        this.BG.opacity = 0;
        this.Label.node.color = cc.color (255, 255, 255, 255);

    },

    // update (dt) {},
});
