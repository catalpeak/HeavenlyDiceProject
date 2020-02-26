
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let windowSize=cc.view.getVisibleSize();
        //cc.log("width="+windowSize.width+",height="+windowSize.height);;
        windowSize=cc.winSize;

        cc.view.enableAntiAlias(true);
        cc.view.resizeWithBrowserSize(true);

        //获取全局播放器
        this.AudioPlayer = cc.find("Audio").getComponent("AudioManagerJS");
        //停止再开启背景音乐
        //this.AudioPlayer.stopBgMusic();
        //this.AudioPlayer.playBgMusic();

    },

    start () {

    },

    // update (dt) {},
});
