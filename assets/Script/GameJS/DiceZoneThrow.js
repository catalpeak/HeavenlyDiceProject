var ThrowModelNumber = 3;

var ThrowModel = new Array ();

ThrowModel [0] = new Array ();
//1-p1
ThrowModel [0][0] = new Array ();
ThrowModel [0][0][0] = -27;
ThrowModel [0][0][1] = 27;
ThrowModel [0][0][2] = 40;
ThrowModel [0][0][3] = 160;
 
//1-p2
ThrowModel [0][1] = new Array ();
ThrowModel [0][1][0] = 107;
ThrowModel [0][1][1] = 160;
ThrowModel [0][1][2] = 40;
ThrowModel [0][1][3] = 160;

//1-p3
ThrowModel [0][2] = new Array ();
ThrowModel [0][2][0] = -160;
ThrowModel [0][2][1] = -107;
ThrowModel [0][2][2] = 40;
ThrowModel [0][2][3] = 160;

//1-p4
ThrowModel [0][3] = new Array ();
ThrowModel [0][3][0] = -160;
ThrowModel [0][3][1] = -107;
ThrowModel [0][3][2] = -160;
ThrowModel [0][3][3] = -40;

//1-p5
ThrowModel [0][4] = new Array ();
ThrowModel [0][4][0] = 107;
ThrowModel [0][4][1] = 160;
ThrowModel [0][4][2] = -160;
ThrowModel [0][4][3] = -40;

//1-p6
ThrowModel [0][5] = new Array ();
ThrowModel [0][5][0] = -27;
ThrowModel [0][5][1] = 27;
ThrowModel [0][5][2] = -160;
ThrowModel [0][5][3] = -40;
/* */////////////////////////////////////////////////////////////////////////////////////

ThrowModel [1] = new Array ();

//2-p1
ThrowModel [1][0] = new Array ();
ThrowModel [1][0][0] = -160;
ThrowModel [1][0][1] = -40;
ThrowModel [1][0][2] = 107;
ThrowModel [1][0][3] = 160;
 
//2-p2
ThrowModel [1][1] = new Array ();
ThrowModel [1][1][0] = 40;
ThrowModel [1][1][1] = 160;
ThrowModel [1][1][2] = 107;
ThrowModel [1][1][3] = 160;

//2-p3
ThrowModel [1][2] = new Array ();
ThrowModel [1][2][0] = -160;
ThrowModel [1][2][1] = -40;
ThrowModel [1][2][2] = -46;
ThrowModel [1][2][3] = 46;

//2-p4
ThrowModel [1][3] = new Array ();
ThrowModel [1][3][0] = 40;
ThrowModel [1][3][1] = 160;
ThrowModel [1][3][2] = -46;
ThrowModel [1][3][3] = 46;

//2-p5
ThrowModel [1][4] = new Array ();
ThrowModel [1][4][0] = -160;
ThrowModel [1][4][1] = -40;
ThrowModel [1][4][2] = -160;
ThrowModel [1][4][3] = -107;

//2-p6
ThrowModel [1][5] = new Array ();
ThrowModel [1][5][0] = 40;
ThrowModel [1][5][1] = 160;
ThrowModel [1][5][2] = -160;
ThrowModel [1][5][3] = -107;
/* */////////////////////////////////////////////////////////////////////////////////////

ThrowModel [2] = new Array ();

//3-p1
ThrowModel [2][0] = new Array ();
ThrowModel [2][0][0] = -27;
ThrowModel [2][0][1] = 27;
ThrowModel [2][0][2] = -26;
ThrowModel [2][0][3] = 160;
 
//3-p2
ThrowModel [2][1] = new Array ();
ThrowModel [2][1][0] = -160;
ThrowModel [2][1][1] = -107;
ThrowModel [2][1][2] = 107;
ThrowModel [2][1][3] = 160;

//3-p3
ThrowModel [2][2] = new Array ();
ThrowModel [2][2][0] = 107;
ThrowModel [2][2][1] = 160;
ThrowModel [2][2][2] = 107;
ThrowModel [2][2][3] = 160;

//3-p4
ThrowModel [2][3] = new Array ();
ThrowModel [2][3][0] = -160;
ThrowModel [2][3][1] = -107;
ThrowModel [2][3][2] = -27;
ThrowModel [2][3][3] = 27;

//3-p5
ThrowModel [2][4] = new Array ();
ThrowModel [2][4][0] = 107;
ThrowModel [2][4][1] = 160;
ThrowModel [2][4][2] = -27;
ThrowModel [2][4][3] = 27;

//3-p6
ThrowModel [2][5] = new Array ();
ThrowModel [2][5][0] = -160;
ThrowModel [2][5][1] = 160;
ThrowModel [2][5][2] = -160;
ThrowModel [2][5][3] = -107;
/* */////////////////////////////////////////////////////////////////////////////////////

// 选择队列，被选择的色子都被存在这里面，一共有六个元素
var ChooseArray  = new Array ();

// Turn --- ture -> Mine / false -> other
let WhosTurn = true;

// Set And Log Dice Number
let DICENUMBER = 6;

var CurrentDiceStatue = new Array (); // 用一个数组记录当前所有色子的点数
// 在投掷之初装填6个，在选择后清空数组
cc.Class({
    extends: cc.Component,

    properties: {
        DiceAnimation : {
            default : null,
            type : cc.Prefab
        },

        Dice1 : {
            default : null,
            type : cc.Prefab
        },

        Dice2 : {
            default : null,
            type : cc.Prefab
        },

        Dice3 : {
            default : null,
            type : cc.Prefab
        },

        Dice4 : {
            default : null,
            type : cc.Prefab
        },

        Dice5 : {
            default : null,
            type : cc.Prefab
        },

        Dice6 : {
            default : null,
            type : cc.Prefab
        },

        ChooseScore_M : {
            default : null,
            type : cc.Label
        },

        SummaryScore_M : {
            default : null,
            type : cc.Label
        },

        GetScore_M : {
            default : null,
            type : cc.Label
        },

        TotalScore_M : {
            default : null,
            type : cc.Label
        },

        ChooseScore_Y : {
            default : null,
            type : cc.Label
        },

        SummaryScore_Y : {
            default : null,
            type : cc.Label
        },

        GetScore_Y : {
            default : null,
            type : cc.Label
        },

        TotalScore_Y : {
            default : null,
            type : cc.Label
        },
        Coin : {
            default : null,
            type : cc.Node
        },
        ChooseTips : {
            default : null,
            type : cc.Prefab
        },
        BreakOutTips : {
            default : null,
            type : cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        // 生成一个对象池，装入六个色子
        this.DicePool = new cc.NodePool ();
        for (let icount = 0; icount < DICENUMBER; ++icount) {
            let Dice = cc.instantiate (this.DiceAnimation);
            this.DicePool.put (Dice);
        }

        cc.director.on ("ChooseFirstIsTouched", function () {
            WhosTurn = false;
            let ThrowPosition = this.GetThorwPosition (DICENUMBER);
            // 随机生成相应的色子点数图片放到对应坐标上
            for (let i = 0; i < DICENUMBER; ++i) {
                // 先随机一个当前要选择的点数
                let chooseNumber = Math.floor ((Math.random () * 6 + 1));
                var DiceWithNumber;
                if (chooseNumber == 1) {
                    DiceWithNumber = cc.instantiate (this.Dice1);
                } else if (chooseNumber == 2) {
                    DiceWithNumber = cc.instantiate (this.Dice2);
                } else if (chooseNumber == 3) {
                    DiceWithNumber = cc.instantiate (this.Dice3);
                } else if (chooseNumber == 4) {
                    DiceWithNumber = cc.instantiate (this.Dice4);
                } else if (chooseNumber == 5) {
                    DiceWithNumber = cc.instantiate (this.Dice5);
                } else if (chooseNumber == 6) {
                    DiceWithNumber = cc.instantiate (this.Dice6);
                } else {
                    cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
                }
                DiceWithNumber.parent = this.node;
                DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

                // Log Current Dice Number in Array
                CurrentDiceStatue.push (chooseNumber);
            }
            this.ThrowDice (DICENUMBER, ThrowPosition);

            this.TestBreakOut ();

        }, this);   // First Button is others

        cc.director.on ("ChooseSecondIsTouched", function () {
            WhosTurn = true;
            let ThrowPosition = this.GetThorwPosition (DICENUMBER);
            // 随机生成相应的色子点数图片放到对应坐标上
            for (let i = 0; i < DICENUMBER; ++i) {
                // 先随机一个当前要选择的点数
                let chooseNumber = Math.floor ((Math.random () * 6 + 1));
                var DiceWithNumber;
                if (chooseNumber == 1) {
                    DiceWithNumber = cc.instantiate (this.Dice1);
                } else if (chooseNumber == 2) {
                    DiceWithNumber = cc.instantiate (this.Dice2);
                } else if (chooseNumber == 3) {
                    DiceWithNumber = cc.instantiate (this.Dice3);
                } else if (chooseNumber == 4) {
                    DiceWithNumber = cc.instantiate (this.Dice4);
                } else if (chooseNumber == 5) {
                    DiceWithNumber = cc.instantiate (this.Dice5);
                } else if (chooseNumber == 6) {
                    DiceWithNumber = cc.instantiate (this.Dice6);
                } else {
                    cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
                }
                DiceWithNumber.parent = this.node;
                DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

                CurrentDiceStatue.push (chooseNumber);
            }
            this.ThrowDice (DICENUMBER, ThrowPosition);

            this.TestBreakOut ();

        }, this);   // First Button is Mine

        // Set emit on Dice choose
        this.node.on ("Dice1IsChoosed", function () {
            this.AddDIceInArray (1);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice2IsChoosed", function () {
            this.AddDIceInArray (2);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice3IsChoosed", function () {
            this.AddDIceInArray (3);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice4IsChoosed", function () {
            this.AddDIceInArray (4);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice5IsChoosed", function () {
            this.AddDIceInArray (5);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice6IsChoosed", function () {
            this.AddDIceInArray (6);
            this.ChooseDice ();
        }, this);


        // Cancel Node
        this.node.on ("Dice1IsCanceled", function () {
            this.CancelDice (1);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice2IsCanceled", function () {
            this.CancelDice (2);
            this.ChooseDice ();
        }, this);
        
        this.node.on ("Dice3IsCanceled", function () {
            this.CancelDice (3);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice4IsCanceled", function () {
            this.CancelDice (4);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice5IsCanceled", function () {
            this.CancelDice (5);
            this.ChooseDice ();
        }, this);

        this.node.on ("Dice6IsCanceled", function () {
            this.CancelDice (6);
            this.ChooseDice ();
        }, this);
 
    },

    start () {

    },

    // 判断当前的色子中有没有得分的可能性
    // True -> Yes / false -> No
    HaveScore (_array) {
        // 有单个的1或5就返回
        for (let i = 0; i < _array.length; ++i) {
            if (_array [i] == 1 || _array [i] == 5) {
                return true;
            }
        }
        // 判断三个以上的可能性
        if (_array.length >= 3) {
            for (let i = 0; i < 3; ++i) {
                let newTempArray = new Array ();
                newTempArray.push (_array [i]);
                newTempArray.push (_array [i + 1]);
                newTempArray.push (_array [i + 2]);
                if (this.JudgeThreeDice (newTempArray) != 0) {
                    return true;
                }
            }
        }
        // 4
        if (_array.length >= 4) {
            for (let i = 0; i < 4; ++i) {
                let newTempArray = new Array ();
                newTempArray.push (_array [i]);
                newTempArray.push (_array [i + 1]);
                newTempArray.push (_array [i + 2]);
                newTempArray.push (_array [i + 3]);
                if (this.JudgeFourDice (newTempArray) != 0) {
                    return true;
                }
            }
        }
        // 5
        if (_array.length >= 5) {
            for (let i = 0; i < 5; ++i) {
                let newTempArray = new Array ();
                newTempArray.push (_array [i]);
                newTempArray.push (_array [i + 1]);
                newTempArray.push (_array [i + 2]);
                newTempArray.push (_array [i + 3]);
                newTempArray.push (_array [i + 4]);
                if (this.JudgeFiveDice (newTempArray) != 0) {
                    return true;
                }
            }
        }
        // 6
        if (_array.length == 6) {
                if (this.JudgeSixDice (_array) != 0) {
                    return true;
                }
        }
        return false;
    },

    TestBreakOut () {
        if (this.HaveScore (CurrentDiceStatue)) {return;}
        else {
            // 清空当前色子
            CurrentDiceStatue.splice (0, CurrentDiceStatue.length);
            // 当前破产了
            // 显示破产动画 等动画结束后进行下面操作
            // 重置当前色子数组
            // 改变回合，调用ChooseAndSkip函数的部分内容
            let breakOutTips_M = cc.instantiate (this.BreakOutTips);
            breakOutTips_M.parent = this.node.parent;
            let anim = breakOutTips_M.getComponent (cc.Animation);
            if (WhosTurn) {
                WhosTurn = false;
                anim.play ("BreakOutTips");
                anim.on ("finished", function () {
                // my Coin gives him
                let anim1 = this.Coin.getComponent (cc.Animation);
                anim1.play ("CoinAnimTheOtherSideFar");
                this.GetScore_M.string = "0";
                DICENUMBER = 6;
                this.node.destroyAllChildren ();
                // 生成接下来的色子
                let ThrowPosition = this.GetThorwPosition (DICENUMBER);
                // 随机生成相应的色子点数图片放到对应坐标上
                for (let i = 0; i < DICENUMBER; ++i) {
                    // 先随机一个当前要选择的点数
                     let chooseNumber = Math.floor ((Math.random () * 6 + 1));
                     var DiceWithNumber;
                     if (chooseNumber == 1) {
                        DiceWithNumber = cc.instantiate (this.Dice1);
                  } else if (chooseNumber == 2) {
                         DiceWithNumber = cc.instantiate (this.Dice2);
                   } else if (chooseNumber == 3) {
                       DiceWithNumber = cc.instantiate (this.Dice3);
                  } else if (chooseNumber == 4) {
                      DiceWithNumber = cc.instantiate (this.Dice4);
                  } else if (chooseNumber == 5) {
                      DiceWithNumber = cc.instantiate (this.Dice5);
                  } else if (chooseNumber == 6) {
                      DiceWithNumber = cc.instantiate (this.Dice6);
                  } else {
                     cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
                    }
                  DiceWithNumber.parent = this.node;
                  DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

                 CurrentDiceStatue.push (chooseNumber);
              }
                 this.ThrowDice (DICENUMBER, ThrowPosition);
                // 选定分数归零
             // 选定分数清零
             this.ChooseScore_M.string = "0";
              this.ChooseScore_Y.string = "0";
              this.SummaryScore_M.string = "0";
             this.SummaryScore_Y.string = "0";
             //色子选定数组清零
               ChooseArray.splice (0, ChooseArray.length);
               breakOutTips_M.destroy ();

              this.TestBreakOut ();

                }, this);
            } 
            
            
            else {
                WhosTurn = true;
                anim.play ("BreakOutTips_Y");
                anim.on ("finished", function () {// my Coin gives him
                    let anim2 = this.Coin.getComponent (cc.Animation);
                    anim2.play ("CoinAnimPositionFar");
                    this.GetScore_M.string = "0";
                    DICENUMBER = 6;
                    this.node.destroyAllChildren ();
                    // 生成接下来的色子
                    let ThrowPosition = this.GetThorwPosition (DICENUMBER);
                    // 随机生成相应的色子点数图片放到对应坐标上
                    for (let i = 0; i < DICENUMBER; ++i) {
                        // 先随机一个当前要选择的点数
                         let chooseNumber = Math.floor ((Math.random () * 6 + 1));
                         var DiceWithNumber;
                         if (chooseNumber == 1) {
                            DiceWithNumber = cc.instantiate (this.Dice1);
                      } else if (chooseNumber == 2) {
                             DiceWithNumber = cc.instantiate (this.Dice2);
                       } else if (chooseNumber == 3) {
                           DiceWithNumber = cc.instantiate (this.Dice3);
                      } else if (chooseNumber == 4) {
                          DiceWithNumber = cc.instantiate (this.Dice4);
                      } else if (chooseNumber == 5) {
                          DiceWithNumber = cc.instantiate (this.Dice5);
                      } else if (chooseNumber == 6) {
                          DiceWithNumber = cc.instantiate (this.Dice6);
                      } else {
                         cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
                        }
                      DiceWithNumber.parent = this.node;
                      DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);
    
                     CurrentDiceStatue.push (chooseNumber);
                  }
                     this.ThrowDice (DICENUMBER, ThrowPosition);
                    // 选定分数归零
                 // 选定分数清零
                 this.ChooseScore_M.string = "0";
                  this.ChooseScore_Y.string = "0";
                  this.SummaryScore_M.string = "0";
                 this.SummaryScore_Y.string = "0";
                 //色子选定数组清零
                   ChooseArray.splice (0, ChooseArray.length);
                   breakOutTips_M.destroy ();
                   
                    this.TestBreakOut ();
              
                }, this);
            }
        }
    },

    ChooseAndSkip () {
        if (!WhosTurn) {return;}
        // 判断当前能不能选择并跳过
        if (this.ChooseScore_M.string == "0" && WhosTurn) {
            // 多次点击提示有问题不能结束,弹出一个动画写着需要选择得分色子才能跳过的界面，播放完动画后自动消失
            let Tips = cc.instantiate (this.ChooseTips);
            Tips.parent = this.node.parent;
            let anim = Tips.getComponent (cc.Animation);
            anim.play ("Tips1-MySkip");
            return ;
        }
        // 将记录当前色子点数的数组清空，以装入新生成的新色子数
        CurrentDiceStatue.splice (0, CurrentDiceStatue.length);
        // 硬币给对方，要判断是我给他还是他给我
        // 当前选定得分计入小结，小结分数计入得分,判断是他是我
        // 将回合改变 Mine->Others & Others -> Mine
        if (WhosTurn) { // Mine
            WhosTurn = false;
            // my Coin gives him
            let anim = this.Coin.getComponent (cc.Animation);
            anim.play ("CoinAnimTheOtherSideFar");
            // 计入小结
            this.SummaryScore_M.string = parseInt (this.ChooseScore_M.string) + parseInt (this.SummaryScore_M.string);
            this.GetScore_M.string = parseInt (this.GetScore_M.string) + parseInt (this.SummaryScore_M.string);
        } else { // Others
            WhosTurn = true;
            // His Coin gives me
            let anim = this.Coin.getComponent (cc.Animation);
            anim.play ("CoinAnimPositionFar");
            // 计入小结
            this.SummaryScore_Y.string = parseInt (this.ChooseScore_Y.string) + parseInt (this.SummaryScore_Y.string);
            this.GetScore_Y.string = parseInt (this.GetScore_Y.string) + parseInt (this.SummaryScore_Y.string);
        }
        // 重置色子个数为6，继续投掷色子
        DICENUMBER = 6;
        // 销毁当前界面上全部色子
        this.node.destroyAllChildren ();

        // 选定分数清零，数组重置
         // 生成接下来的色子
         let ThrowPosition = this.GetThorwPosition (DICENUMBER);
         // 随机生成相应的色子点数图片放到对应坐标上
         for (let i = 0; i < DICENUMBER; ++i) {
             // 先随机一个当前要选择的点数
             let chooseNumber = Math.floor ((Math.random () * 6 + 1));
             var DiceWithNumber;
             if (chooseNumber == 1) {
                 DiceWithNumber = cc.instantiate (this.Dice1);
             } else if (chooseNumber == 2) {
                 DiceWithNumber = cc.instantiate (this.Dice2);
             } else if (chooseNumber == 3) {
                 DiceWithNumber = cc.instantiate (this.Dice3);
             } else if (chooseNumber == 4) {
                 DiceWithNumber = cc.instantiate (this.Dice4);
             } else if (chooseNumber == 5) {
                 DiceWithNumber = cc.instantiate (this.Dice5);
             } else if (chooseNumber == 6) {
                 DiceWithNumber = cc.instantiate (this.Dice6);
             } else {
                 cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
             }
             DiceWithNumber.parent = this.node;
             DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

            CurrentDiceStatue.push (chooseNumber);
         }
         this.ThrowDice (DICENUMBER, ThrowPosition);
        // 选定分数归零
        // 选定分数清零
        this.ChooseScore_M.string = "0";
        this.ChooseScore_Y.string = "0";
        this.SummaryScore_M.string = "0";
        this.SummaryScore_Y.string = "0";
        //色子选定数组清零
        ChooseArray.splice (0, ChooseArray.length);

        this.TestBreakOut ();
    },

    ChooseAndSkip_other () {
        if (WhosTurn) {return;}
        // 判断当前能不能选择并跳过
        if (this.ChooseScore_Y.string == "0" && !WhosTurn) {
            let Tips = cc.instantiate (this.ChooseTips);
            Tips.parent = this.node.parent;
            let anim = Tips.getComponent (cc.Animation);
            anim.play ("Tips1-OtherSkip");
            return;
        }
        // 将记录当前色子点数的数组清空，以装入新生成的新色子数
        CurrentDiceStatue.splice (0, CurrentDiceStatue.length);
        // 硬币给对方，要判断是我给他还是他给我
        // 当前选定得分计入小结，小结分数计入得分,判断是他是我
        // 将回合改变 Mine->Others & Others -> Mine
        if (WhosTurn) { // Mine
            WhosTurn = false;
            // my Coin gives him
            let anim = this.Coin.getComponent (cc.Animation);
            anim.play ("CoinAnimTheOtherSideFar");
            // 计入小结
            this.SummaryScore_M.string = parseInt (this.ChooseScore_M.string) + parseInt (this.SummaryScore_M.string);
            this.GetScore_M.string = parseInt (this.GetScore_M.string) + parseInt (this.SummaryScore_M.string);
        } else { // Others
            WhosTurn = true;
            // His Coin gives me
            let anim = this.Coin.getComponent (cc.Animation);
            anim.play ("CoinAnimPositionFar");
            // 计入小结
            this.SummaryScore_Y.string = parseInt (this.ChooseScore_Y.string) + parseInt (this.SummaryScore_Y.string);
            this.GetScore_Y.string = parseInt (this.GetScore_Y.string) + parseInt (this.SummaryScore_Y.string);
        }
        // 重置色子个数为6，继续投掷色子
        DICENUMBER = 6;
        // 销毁当前界面上全部色子
        this.node.destroyAllChildren ();

        // 选定分数清零，数组重置
         // 生成接下来的色子
         let ThrowPosition = this.GetThorwPosition (DICENUMBER);
         // 随机生成相应的色子点数图片放到对应坐标上
         for (let i = 0; i < DICENUMBER; ++i) {
             // 先随机一个当前要选择的点数
             let chooseNumber = Math.floor ((Math.random () * 6 + 1));
             var DiceWithNumber;
             if (chooseNumber == 1) {
                 DiceWithNumber = cc.instantiate (this.Dice1);
             } else if (chooseNumber == 2) {
                 DiceWithNumber = cc.instantiate (this.Dice2);
             } else if (chooseNumber == 3) {
                 DiceWithNumber = cc.instantiate (this.Dice3);
             } else if (chooseNumber == 4) {
                 DiceWithNumber = cc.instantiate (this.Dice4);
             } else if (chooseNumber == 5) {
                 DiceWithNumber = cc.instantiate (this.Dice5);
             } else if (chooseNumber == 6) {
                 DiceWithNumber = cc.instantiate (this.Dice6);
             } else {
                 cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
             }
             DiceWithNumber.parent = this.node;
             DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

            CurrentDiceStatue.push (chooseNumber);
         }
         this.ThrowDice (DICENUMBER, ThrowPosition);
        // 选定分数归零
        // 选定分数清零
        this.ChooseScore_M.string = "0";
        this.ChooseScore_Y.string = "0";
        this.SummaryScore_M.string = "0";
        this.SummaryScore_Y.string = "0";
        //色子选定数组清零
        ChooseArray.splice (0, ChooseArray.length);

        this.TestBreakOut ();
    },

    ChooseAndThrow () {
        // 判断当前能不能选择并重置
        if (!WhosTurn) {return;}

        if (this.ChooseScore_M.string == "0" && WhosTurn) {
            // 多次点击提示有问题不能结束,弹出一个动画写着需要选择得分色子才能跳过的界面，播放完动画后自动消失
            let Tips = cc.instantiate (this.ChooseTips);
            Tips.parent = this.node.parent;
            let anim = Tips.getComponent (cc.Animation);
            anim.play ("Tips1-MyAgain");
            return ;
        }
        // 将记录当前色子点数的数组清空，以装入新生成的新色子数
        CurrentDiceStatue.splice (0, CurrentDiceStatue.length);
        // 还是自己边，硬币不动
        // 当前选定得分计入小结, 还要判断是我方他方
        if (WhosTurn) { // Mine
            this.SummaryScore_M.string = parseInt (this.ChooseScore_M.string) + parseInt (this.SummaryScore_M.string);
        } else { //Others 
            this.SummaryScore_Y.string = parseInt (this.ChooseScore_Y.string) + parseInt (this.SummaryScore_Y.string);
        }
        // 记录色子个数，继续投掷色子
        if (ChooseArray.length == 6) {
            DICENUMBER = 6; // 若是所有色子都被选走则重置色子
        } else {
            DICENUMBER -= ChooseArray.length;
        }

        // 销毁当前界面上全部色子
        this.node.destroyAllChildren ();
        // 生成接下来的色子
        let ThrowPosition = this.GetThorwPosition (DICENUMBER);
            // 随机生成相应的色子点数图片放到对应坐标上
            for (let i = 0; i < DICENUMBER; ++i) {
                // 先随机一个当前要选择的点数
                let chooseNumber = Math.floor ((Math.random () * 6 + 1));
                var DiceWithNumber;
                if (chooseNumber == 1) {
                    DiceWithNumber = cc.instantiate (this.Dice1);
                } else if (chooseNumber == 2) {
                    DiceWithNumber = cc.instantiate (this.Dice2);
                } else if (chooseNumber == 3) {
                    DiceWithNumber = cc.instantiate (this.Dice3);
                } else if (chooseNumber == 4) {
                    DiceWithNumber = cc.instantiate (this.Dice4);
                } else if (chooseNumber == 5) {
                    DiceWithNumber = cc.instantiate (this.Dice5);
                } else if (chooseNumber == 6) {
                    DiceWithNumber = cc.instantiate (this.Dice6);
                } else {
                    cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
                }
                DiceWithNumber.parent = this.node;
                DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

                CurrentDiceStatue.push (chooseNumber);
            }
            this.ThrowDice (DICENUMBER, ThrowPosition);

        // 选定分数清零
        this.ChooseScore_M.string = "0";
        this.ChooseScore_Y.string = "0";
        //色子选定数组清零
        ChooseArray.splice (0, ChooseArray.length);

        this.TestBreakOut ();
    },

    ChooseAndThrow_other () {
        if (WhosTurn) {return;}
        // 判断当前能不能选择并重置
        if (this.ChooseScore_Y.string == "0" && !WhosTurn) {
            let Tips = cc.instantiate (this.ChooseTips);
            Tips.parent = this.node.parent;
            let anim = Tips.getComponent (cc.Animation);
            anim.play ("Tips1-OtherAgain");
            return;
        }
        // 将记录当前色子点数的数组清空，以装入新生成的新色子数
        CurrentDiceStatue.splice (0, CurrentDiceStatue.length);
        // 还是自己边，硬币不动
        // 当前选定得分计入小结, 还要判断是我方他方
        if (WhosTurn) { // Mine
            this.SummaryScore_M.string = parseInt (this.ChooseScore_M.string) + parseInt (this.SummaryScore_M.string);
        } else { //Others 
            this.SummaryScore_Y.string = parseInt (this.ChooseScore_Y.string) + parseInt (this.SummaryScore_Y.string);
        }
        // 记录色子个数，继续投掷色子
        if (ChooseArray.length == 6) {
            DICENUMBER = 6; // 若是所有色子都被选走则重置色子
        } else {
            DICENUMBER -= ChooseArray.length;
        }

        // 销毁当前界面上全部色子
        this.node.destroyAllChildren ();
        // 生成接下来的色子
        let ThrowPosition = this.GetThorwPosition (DICENUMBER);
            // 随机生成相应的色子点数图片放到对应坐标上
            for (let i = 0; i < DICENUMBER; ++i) {
                // 先随机一个当前要选择的点数
                let chooseNumber = Math.floor ((Math.random () * 6 + 1));
                var DiceWithNumber;
                if (chooseNumber == 1) {
                    DiceWithNumber = cc.instantiate (this.Dice1);
                } else if (chooseNumber == 2) {
                    DiceWithNumber = cc.instantiate (this.Dice2);
                } else if (chooseNumber == 3) {
                    DiceWithNumber = cc.instantiate (this.Dice3);
                } else if (chooseNumber == 4) {
                    DiceWithNumber = cc.instantiate (this.Dice4);
                } else if (chooseNumber == 5) {
                    DiceWithNumber = cc.instantiate (this.Dice5);
                } else if (chooseNumber == 6) {
                    DiceWithNumber = cc.instantiate (this.Dice6);
                } else {
                    cc.log ("In Faction DizeZoneThrow : chooseNumber is error which is not between 1 ~ 6");
                }
                DiceWithNumber.parent = this.node;
                DiceWithNumber.setPosition (ThrowPosition [i][0], ThrowPosition [i][1]);

                CurrentDiceStatue.push (chooseNumber);
            }
            this.ThrowDice (DICENUMBER, ThrowPosition);

        // 选定分数清零
        this.ChooseScore_M.string = "0";
        this.ChooseScore_Y.string = "0";
        //色子选定数组清零
        ChooseArray.splice (0, ChooseArray.length);

        this.TestBreakOut ();
    },

    // Turn --- ture -> Mine / false -> other
    ChooseDice () {
        if (WhosTurn) { // Mine
            this.ChooseScore_M.string = this.DiceScoreChoosed (ChooseArray);
        } else { // Others
            this.ChooseScore_Y.string = this.DiceScoreChoosed (ChooseArray);
        }
    },

    // @brief Return Array [6] with 6 position
           // Para is the number of Dices
    GetThorwPosition (_DiceNumber) {

        if (_DiceNumber == 0) {cc.log ("In Function DiceZoneThrow-GetThrowPosition : Input _DiceNumber == 0 is ERROR");return null;}
        if (_DiceNumber >= 7) {cc.log ("In Function DiceZoneThrow-GetThrowPosition : Input _DiceNumber >= 7 is ERROR");return null;}
        // Get Choosed Number & Choose Aim Throw Model
        var ChoosedModelNumber = Math.floor ((Math.random () * 10 ) % ThrowModelNumber);

        var ret = new Array (); // 返回_DiceNumber数量的数组，每个数组里有X值和Y值
        var Position  = new Array ();
        Position[6] = true;
        Position[0] = false;
        Position[1] = false;
        Position[2] = false;
        Position[3] = false;
        Position[4] = false;
        Position[5] = false;
        // Distribute Dice Position Number By Dice Number 
        for (var currentDiceNumber = 0; currentDiceNumber < _DiceNumber; currentDiceNumber += 1) {
            // 先确定放在当前模式中的哪个位置上
            var PositionInModel = 6; // 先弄在没有的一个位置上，找到合适的再替换
            while (Position [PositionInModel]) {PositionInModel = Math.floor (Math.random () * 10 % 6);}
            Position [PositionInModel] = true;
            // 找到了目标位置
            ret [currentDiceNumber] = new Array ();
            ret [currentDiceNumber][0] = Math.floor (ThrowModel[ChoosedModelNumber][PositionInModel][0]
                                                  + (ThrowModel[ChoosedModelNumber][PositionInModel][1]
                                                  -  ThrowModel[ChoosedModelNumber][PositionInModel][0]
                                                ) *  Math.random ()); // Set X
            ret [currentDiceNumber][1] = Math.floor (ThrowModel[ChoosedModelNumber][PositionInModel][2]
                                                  + (ThrowModel[ChoosedModelNumber][PositionInModel][3]
                                                  -  ThrowModel[ChoosedModelNumber][PositionInModel][2]
                                                ) *  Math.random ()); // Set Y
        }
        return ret;
    },


    ThrowDice (_DiceNumber, DicePositionArray) {
        let Dice = null;
        for (let Dice_i = 0; Dice_i < _DiceNumber; ++Dice_i) {
            if (this.DicePool.size () > 0) {
                Dice = this.DicePool.get ();
            } else {
                Dice = cc.instantiate (this.DiceAnimation);
            }
            Dice.parent = this.node;
            Dice.setPosition (DicePositionArray [Dice_i][0], DicePositionArray [Dice_i][1]);
        }
    },

    AddDIceInArray (_AimNumber) {
        if (ChooseArray.length <= 6) {
            ChooseArray.push (_AimNumber);
        } else {
            cc.log ("In Function DizeZoneThrow : AddDiceArray, Array is Too Big");
        }
    },

    CancelDice (_AimNumber) {
        if (ChooseArray.length < 1) {cc.log ("In Function DiceZoneThrow : CancelDice , ChooseArray is Too small"); return;}
        for (let i = 0; i < ChooseArray.length; i++) {
            if (ChooseArray [i] == _AimNumber) {
                ChooseArray.splice (i, 1);
                break;
            }
        }
    },


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Calculate Choose Dices Score
    // @brief Return 当前选中色子所代表的分数 ，使用色子数组的长度作为选择参数 
    DiceScoreChoosed (_array) {
    
        // 选择算分函数根据色子的个数
        if (_array.length <= 2) {
            return this.JudgeTwoDice (_array);
        } 

         if (_array.length == 3) {
            return this.JudgeThreeDice (_array);
        } 
        
         if (_array.length == 4) {
            return this.JudgeFourDice (_array);
        } 

         if (_array.length == 5) {
            return this.JudgeFiveDice (_array);
        } 

         if (_array.length == 6) {
            return this.JudgeSixDice (_array);
        }
        /** */
    },

    // 2 3 4 6 是不得分的数字，只要里面有这些单独的数字就不得分,并且该函数中提前不判断是否有得分项
    SingleDiceWithNoScore (_array) {
        for (let i = 0; i < _array.length; ++i) {
            if (_array [i] == 2 ||
                _array [i] == 3 ||
                _array [i] == 4 ||
                _array [i] == 6) {
                    return true;
                }
        }
        return false;
    },

    JudgeTwoDice (_array) {
        let ret = 0;
        if (_array.length > 2) {cc.log ("In Function DiceZoneThrow : JudgeTwoDice error Too Long Array");return ret;}
        if (this.SingleDiceWithNoScore (_array)) {
            ret = 0;
            return ret;
        } else {
            ret = 0;
            for (let i = 0; i < _array.length; ++i) {
                if (_array [i] == 1) {
                    ret += 100;
                } else if (_array [i] == 5) {
                    ret += 50;
                } else {
                    cc.log ("In Function DiceZoneThrow : JudgeTwoDice error SigleDiceWithNoScore function judge No score is error");
                }
            }
            return ret;
        }return ret;
    },

    JudgeThreeDice (_array) {
        let ret = 0;
        if (_array.length > 3) {cc.log ("In Function DiceZoneThrow : JudgeThreeDice error Too Long Array");return ret;}
        if (_array.length != 3) {cc.log ("In Function DiceZoneThrow : JudgeThreeDice error Unkonwn Array Maybe too short");return ret;}
        if (_array [0] == _array [1] && _array [1] == _array [2]) {
            if (_array [0] == 1) {
                ret = 1000;
            } else {
                ret = _array [0] * 100;
            }
            return ret;
        } else {
            // 不是三个一样的
            if (this.SingleDiceWithNoScore (_array)) {
                return 0;
            } else {
                ret = 0;
                for (let i = 0; i < _array.length; ++i)  {
                    if (_array [i] == 1) {
                        ret += 100;
                    } else if  (_array [i] == 5) {
                        ret += 50;
                    }
                }
                return ret;
            }
        }
    },

    JudgeFourDice (_array) {
        let ret = 0;
        if (_array.length > 4) {cc.log ("In Function DiceZoneThrow : JudgeFourDice error Too Long Array");return ret;}
        if (_array.length != 4) {cc.log ("In Function DiceZoneThrow : JudgeFourDice error Unkonwn Array Maybe too short");return ret;}
        if (_array [0] == _array [1] && 
            _array [1] == _array [2] &&
            _array [2] == _array [3]) {
                if (_array [0] == 1) {
                    ret = 2000;
                } else {
                    ret = _array [0] * 200; 
                }
                return ret;
            } else {// 这四个不一样,分成三&一两组进行判断
                let maxTempRet = 0;

                for (let i = 0; i < 4; ++i) {
                    if (_array [i] == 1 || _array [i] == 5) {
                        let tempRet = 0;
                        var tempArray = new Array ();
                        for (var j = 0, k = 0; j < 4; ++j) {
                            if (j === i) {
                                continue;
                            }
                            else {
                                tempArray [k++] = _array [j];
                            }
                        }
                        tempRet += this.JudgeThreeDice (tempArray)// 剩余三个加一起
                        // 剩余三个加起来有结果则加上当前的得分的数, 若是没有分数，则本分配方式作废，进入下一轮
                        if (tempRet == 0) {continue;}
                        if (_array [i] == 1) {
                            tempRet += 100;
                        } else {
                            tempRet += 50;
                        }
                        if (tempRet > maxTempRet) {
                            maxTempRet = tempRet;
                        }
                    } 
                }
                return maxTempRet;
            }
    },

    JudgeFiveDice (_array) {
        let ret = 0;
        if (_array.length > 5) {cc.log ("In Function DiceZoneThrow : JudgeFiveDice error Too Long Array");return ret;}
        if (_array.length != 5) {cc.log ("In Function DiceZoneThrow : JudgeFiveDice error Unkonwn Array Maybe too short");return ret;}
        if (_array [0] == _array [1] && _array [1] == _array [2] &&
            _array [2] == _array [3] && _array [3] == _array [4]) {
            
            if (_array [0] == 1) {
                return 4000;
            } else {
                return _array [0] * 400;
            }
        } else { // 五个不一样的
            //判断1~5 或者 2~6
            let OneSixArray  = new Array ();
            for (let i = 0; i < _array.length; ++i) {
                OneSixArray [i] = false;
            } // init
            for (let i = 0; i < _array.length; ++i) {
                OneSixArray [_array [i]] = true;
            } // set Number
            // 1~5
            let _haveFive = false;
            let haveFive = true;
            for (let i = 1; i < 6; ++i) {
                if (! OneSixArray [i]) {
                    haveFive = false;
                    break;
                }
            }
            if (haveFive)_haveFive = true; // 1~5
            haveFive = true;
            for (let i = 2; i < 7; ++i) {
                if (! OneSixArray [i]) {
                    haveFive = false;
                    break;
                }
            }
            if (haveFive)_haveFive = true;

            if (_haveFive) {
                cc.log ("In Five Has 1000");
                return 1000;
            } else { //没有五个特殊的，打到四个里面找
                let maxTempRet = 0;
                for (let i = 0; i < 5; ++i) {
                    let tempRet = 0;
                    if (_array [i] == 1 || _array [i] == 5) {
                        var tempArray = new Array ();
                        for (var j = 0, k = 0; j < 5; ++j) {
                            if (j === i) {
                                continue;
                            }
                            else {
                                tempArray [k++] = _array [j];
                            }
                        }
                        tempRet += this.JudgeFourDice (tempArray);

                        if (tempRet == 0)  {continue;}
                        if (_array [i] == 1) {
                            tempRet += 100;
                        } else {
                            tempRet += 50;
                        }
                        if (tempRet > maxTempRet) {
                            maxTempRet = tempRet;
                        }
                    } 
                }
                return maxTempRet;
            }
        } 
    },    

    JudgeSixDice (_array) {
        let ret = 0;
        if (_array.length > 6) {cc.log ("In Function DiceZoneThrow : JudgeSixDice error Too Long Array");return ret;}
        if (_array.length != 6) {cc.log ("In Function DiceZoneThrow : JudgeSixDice error Unkonwn Array Maybe too short");return ret;}
        if (_array [0] == _array [1] && _array [1] == _array [2] &&
            _array [2] == _array [3] && _array [3] == _array [4] &&
            _array [4] == _array [5]) {
            // 六个一样的
            if (_array [0] == 1) {
                return 8000;
            } else {
                return _array [0] * 800;
            }
        } else  { // 六个不一样的
            //判断1~6
            let OneSixArray  = new Array (6);
            for (let i = 0; i < _array.length; ++i) {
                OneSixArray [i] = false;
            }
            for (let i = 0; i < _array.length; ++i) {
                OneSixArray [_array [i]] = true;
            } 
            // 1~6
            let haveFive = true;
            for (let i = 1; i < 7; ++i) {
                if (! OneSixArray [i]) {
                    haveFive = false;
                    break;
                }
            }

            if (haveFive) {
                cc.log ("In Six Has 2000");
                return 2000;
            } else { // 六个里没有特殊的去五个里面找
                let maxTempRet = 0;
                for (let i = 0; i < 6; ++i) {
                    let tempRet = 0;
                    if (_array [i] == 1 || _array [i] == 5) {
                        var tempArray = new Array ();
                        for (var j = 0, k = 0; j < 6; ++j) {
                            if (j === i) {
                                continue;
                            }
                            else {
                                tempArray [k++] = _array [j];
                            }
                        }
                        tempRet += this.JudgeFiveDice (tempArray);
                        if (tempRet == 0) {continue;}
                        if (_array [i] == 1) {
                            tempRet += 100;
                        } else {
                            tempRet += 50;
                        }
                    }
                    if (tempRet > maxTempRet) {
                        maxTempRet = tempRet;
                    }
                }
                return maxTempRet;
            }
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // update (dt) {},
});
