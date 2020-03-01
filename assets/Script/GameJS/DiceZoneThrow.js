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
var ChooseArray  = new Array (0);

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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        let DICENUMBER = 6;

        // 生成一个对象池，装入六个色子
        this.DicePool = new cc.NodePool ();
        for (let icount = 0; icount < DICENUMBER; ++icount) {
            let Dice = cc.instantiate (this.DiceAnimation);
            this.DicePool.put (Dice);
        }

        // Turn --- ture -> Mine / false -> other
        let WhosTurn = true;

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
            }
            this.ThrowDice (DICENUMBER, ThrowPosition);
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
            }
            this.ThrowDice (DICENUMBER, ThrowPosition);
        }, this);   // First Button is Mine

        // Set emit on Dice choose
        this.node.on ("Dice1IsChoosed", function () {
            this.AddDIceInArray (1);
        }, this);

        this.node.on ("Dice2IsChoosed", function () {
            this.AddDIceInArray (2);
        }, this);

        this.node.on ("Dice3IsChoosed", function () {
            this.AddDIceInArray (3);
        }, this);

        this.node.on ("Dice4IsChoosed", function () {
            this.AddDIceInArray (4);
        }, this);

        this.node.on ("Dice5IsChoosed", function () {
            this.AddDIceInArray (5);
        }, this);

        this.node.on ("Dice6IsChoosed", function () {
            this.AddDIceInArray (6);
        }, this);


        // Cancel Node
        this.node.on ("Dice1IsCanceled", function () {
            this.CancelDice (1);
        }, this);

        this.node.on ("Dice2IsCanceled", function () {
            this.CancelDice (2);
        }, this);
        
        this.node.on ("Dice3IsCanceled", function () {
            this.CancelDice (3);
        }, this);

        this.node.on ("Dice4IsCanceled", function () {
            this.CancelDice (4);
        }, this);

        this.node.on ("Dice5IsCanceled", function () {
            this.CancelDice (5);
        }, this);

        this.node.on ("Dice6IsCanceled", function () {
            this.CancelDice (6);
        }, this);

    },

    start () {

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
        //cc.log ("Dice " + _AimNumber + " is choosed");
    },

    CancelDice (_AimNumber) {
        if (ChooseArray.length < 1) {cc.log ("In Function DiceZoneThrow : CancelDice , ChooseArray is Too small"); return;}
        for (let i = 0; i < ChooseArray.length; i++) {
            if (ChooseArray [i] == _AimNumber) {
                ChooseArray.splice (i, 1);
                break;
            }
        }
        //cc.log ("Dice " + _AimNumber + " is Cancel");
    },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Calculate Choose Dices Score
    DiceScoreChoosed () {

    },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // update (dt) {},
});
