// enumのように使うので、値は使用しない。
var HandOfRun = {
    FourSet: 4,
    OverThreeSet: 3,
    OverTwoSet: 2,
    Either: 0,
    NotIncluded: undefined,
};
var HandOfTriple = {
    FourSet: 4,
    OverThreeSet: 3,
    OverTwoSet: 2,
    Either: 0,
    NotIncluded: undefined,
};
var HandOfDyed;
(function (HandOfDyed) {
    HandOfDyed[HandOfDyed["OnlyType"] = 1] = "OnlyType";
    HandOfDyed[HandOfDyed["ONlyTypeWithChar"] = 2] = "ONlyTypeWithChar";
    HandOfDyed[HandOfDyed["OverTwoType"] = 3] = "OverTwoType";
    HandOfDyed[HandOfDyed["NotDyed"] = 0] = "NotDyed";
    // NeedThree= 5, //これはどっちかっていうと三色同順しか使ってない。あと三色同行。不要？
})(HandOfDyed || (HandOfDyed = {}));
// 字牌系
var HandOfCharacters = {
    Mix: 7,
    Dragons: 3,
    Winds: 4,
    Either: 0,
    NotIncluded: undefined, //字牌なし
};
// const HandOfHeadAndOld = {
//   OnlyHeadAndOld: 1, // 1と9のみ
//   IncludedHeadAndOld: 2, // 1/9あるやつ。チャンタなど。123
//   Either: 0,
//   NotIncluded: undefined,
// };
var HandOfHeadAndOld;
(function (HandOfHeadAndOld) {
    HandOfHeadAndOld[HandOfHeadAndOld["OnlyHeadAndOld"] = 1] = "OnlyHeadAndOld";
    HandOfHeadAndOld[HandOfHeadAndOld["IncludedHeadAndOld"] = 2] = "IncludedHeadAndOld";
    HandOfHeadAndOld[HandOfHeadAndOld["Either"] = 0] = "Either";
    HandOfHeadAndOld[HandOfHeadAndOld["NotIncluded"] = -1] = "NotIncluded";
})(HandOfHeadAndOld || (HandOfHeadAndOld = {}));
var HandOfIrregular = {
    True: true,
    False: false,
};
// 門前役かどうか これはいらない？？？
var HandOfCleanGate = {
    Clean: true,
    CanCry: {
        DownScore: 0,
        ConstantScore: 1,
    },
};
// 門前役でないとき、役にないていいかわるいか。（基本は泣いてもいいはず。三暗刻とかくらい。）
var CanCryToHand = {
    Can: true,
    Cannot: false,
};
// 4面子なので
var AllSet = 4;
// 役満
var FullScore = 100;
var DoubleFullScore = 200;
