// 全ての役クラス
var Hand = /** @class */ (function () {
    function Hand(
    // 以下順番に。
    name, fanNum, canCry, 
    // 以下順不同
    // handOfCleanGate: handOfCleanGate = HandOfCleanGate.CanCry, // ここらへんややこしい。
    handOfRun, handOfTriple, handOfDyed, handOfCharacters, handOfHeadAndOld, handOfIrregular) {
        if (handOfRun === void 0) { handOfRun = HandOfRun.Either; }
        if (handOfTriple === void 0) { handOfTriple = HandOfTriple.Either; }
        if (handOfDyed === void 0) { handOfDyed = HandOfDyed.NotDyed; }
        if (handOfCharacters === void 0) { handOfCharacters = HandOfCharacters.Either; }
        if (handOfHeadAndOld === void 0) { handOfHeadAndOld = HandOfHeadAndOld.Either; }
        if (handOfIrregular === void 0) { handOfIrregular = HandOfIrregular.False; }
        // 役の名前
        this.name = name;
        // 翻数
        this.fanNum = fanNum;
        // 泣きの有無
        this.canCry = canCry; //truthy ,falsyに使える？
        // 順子系
        this.handOfRun = handOfRun;
        // 刻子系
        this.handOfTriple = handOfTriple;
        // 染め手系
        this.handOfDyed = handOfDyed;
        // 字牌系
        this.handOfCharacters = handOfCharacters;
        // 1・9系
        this.handOfHeadAndOld = handOfHeadAndOld;
        // 特殊系
        this.handOfIrregular = handOfIrregular;
    }
    return Hand;
}());
var AllHand = createAllHand();
// まだ全部じゃない
function createAllHand() {
    var allHandList = [];
    var reach = new Hand('立直', 1, false); //最後の{}ってどうにかならんかね。まあでもかならず入る設計になるからいっか。
    allHandList.push(reach);
    var oneShot = new Hand('一発', 1, false);
    allHandList.push(oneShot);
    var drawTheOneInFrontOfCleanGate = new Hand('門前清自摸和（ツモ）', 1, false);
    allHandList.push(drawTheOneInFrontOfCleanGate);
    var onlyTwoToEight = new Hand('断么九(タンヤオ)', 1, 1, HandOfHeadAndOld.NotIncluded);
    allHandList.push(onlyTwoToEight);
    // 平和は頭が役牌ダメで、そこがhandPatter.jsを修正する必要がある。
    var peace = new Hand('平和（ピンフ）', 1, false
    // (handOfRun = HandOfRun.FourSet) // FourSetの場合、順子なら刻子を、刻子なら順子を自動でNoにするようなメソッドを作成する。
    );
    allHandList.push(peace);
    var oneCup = new Hand('一盃口(イーペーコー)', 1, false); //handOfRun = HandOfRun.OverTwoSet;
    allHandList.push(oneCup);
    var twoCup = new Hand('二盃口(リャンペーコー)', 3, false); //(handOfRun = HandOfRun.FourSet)
    allHandList.push(twoCup);
    var TripleFour = new Hand('対々和（トイトイホー）', 2, 2); //(handOfTriple = HandOfTriple.FourSet)
    allHandList.push(TripleFour);
    var darkThreeTriple = new Hand('三暗刻', 2, 2
    // 鳴きにも２種類あって役以外鳴いてもいいもの。そもそも鳴いちゃだめ。役に鳴いてもいいもの（鳴いてもいいものの中に、半が下がるもの、同じものがある）。これらを、プロパティ化する。
    // (handOfTriple = HandOfTriple.OverThreeSet)
    );
    allHandList.push(darkThreeTriple);
    var ThreeColorRun = new Hand('三色同順', 2, 1
    // HandOfDyed.NeedThree, // NeedThreeプロパティは必要か？細分化しすぎ？
    // (handOfRun = HandOfRun.OverThreeSet)
    );
    allHandList.push(ThreeColorRun);
    var ThreeColorTriple = new Hand('三色同刻', 2, 2
    // (handOfTriple = HandOfTriple.OverThreeSet)
    // (handOfDyed = HandOfDyed.NeedThree) これは不要？
    );
    allHandList.push(ThreeColorTriple);
    var rocketOverTheFinish = new Hand('一気通貫', 2, 1, HandOfDyed.OverTwoType
    // (handOfRun = HandOfRun.OverThreeSet),
    // (handOfHeadAndOld = HandOfHeadAndOld.IncludedHeadAndOld)
    );
    allHandList.push(rocketOverTheFinish);
    var mixedCharWithOnlyOldAndHead = new Hand('混老頭(ホンロウトウ)', 2, 2
    // (handOfHeadAndOld = HandOfHeadAndOld.OnlyHeadAndOld),
    // (handOfCharacters = HandOfCharacters.Mix)
    );
    allHandList.push(mixedCharWithOnlyOldAndHead);
    var mixedCharWithOldAndHead = new Hand('チャンタ', 2, 1
    // (handOfHeadAndOld = HandOfHeadAndOld.IncludedHeadAndOld),
    // (handOfCharacters = HandOfCharacters.Mix)
    );
    allHandList.push(mixedCharWithOldAndHead);
    var smallDragons = new Hand('小三元', 2, 2); //(handOfCharacters = HandOfCharacters.Dragons)
    allHandList.push(smallDragons);
    var ThreeFourth = new Hand('三槓子', 2, 2); //(handOfTriple = HandOfTriple.OverThreeSet))
    allHandList.push(ThreeFourth);
    var mixedOnlyColor = new Hand('混一色（ホンイーソー', 3, 2
    // (handOfCharacters = HandOfCharacters.Mix),
    // (handOfDyed = HandOfDyed.ONlyTypeWithChar)
    );
    allHandList.push(mixedOnlyColor);
    var pureOldHeadIncluded = new Hand('純チャン', 3, 2
    // (handOfHeadAndOld = HandOfHeadAndOld.IncludedHeadAndOld),
    // (handOfCharacters = HandOfCharacters.NotIncluded)
    );
    allHandList.push(pureOldHeadIncluded);
    var pureOneColor = new Hand('清一色', 6, 5
    // (handOfDyed = HandOfDyed.OnlyType),
    // (handOfCharacters = HandOfCharacters.NotIncluded)
    );
    allHandList.push(pureOneColor);
    var bigDragons = new Hand('大三元', FullScore, true
    // (handOfCharacters = HandOfCharacters.Dragons),
    // (handOfTriple = HandOfTriple.OverThreeSet) // 三元牌3つを刻子なので。
    );
    allHandList.push(bigDragons);
    var smallWindsHappiness = new Hand('小四喜（ショウスーシー）', FullScore, true
    // (handOfCharacters = HandOfCharacters.Winds),
    // (handOfTriple = HandOfTriple.OverThreeSet)
    );
    allHandList.push(smallWindsHappiness);
    var charOnly = new Hand('字一色(ツーイーソー）', FullScore, true
    // (handOfCharacters = HandOfCharacters.Mix),
    // (handOfTriple = HandOfTriple.FourSet)
    );
    allHandList.push(charOnly);
    var fourDarkTriple = new Hand('四暗刻', FullScore, false
    // (handOfTriple = HandOfTriple.FourSet)
    );
    allHandList.push(fourDarkTriple);
    var OldHead = new Hand('清老頭（チンロウトウ）', FullScore, true
    // (handOfHeadAndOld = HandOfHeadAndOld.OnlyHeadAndOld),
    // (handOfCharacters = HandOfCharacters.NotIncluded)
    );
    allHandList.push(OldHead);
    var FourthFourSet = new Hand('四槓子(スーカンツ)', FullScore, true
    // (handOfTriple = HandOfTriple.FourSet)
    );
    allHandList.push(FourthFourSet);
    var bigWindsHappiness = new Hand('大四喜（ダイスーシー）', DoubleFullScore, true
    // (handOfCharacters = HandOfCharacters.Winds),
    // (handOfTriple = HandOfTriple.FourSet)
    );
    allHandList.push(bigWindsHappiness);
    setData(allHandList);
    return allHandList;
}
// 細かく役のプロパティを設定する(順子と刻子だけ)
function setData(allHand) {
    allHand.forEach(function (hand) {
        // 1・9系で、1と9のみの場合、順子は成立しない。
        if (hand.handOfHeadAndOld === HandOfHeadAndOld.OnlyHeadAndOld) {
            hand.handOfRun = HandOfRun.NotIncluded;
            hand.handOfTriple = HandOfTriple.FourSet;
        }
        if (hand.handOfRun === HandOfRun.FourSet) {
            hand.handOfTriple = HandOfTriple.NotIncluded;
        }
        if (hand.handOfTriple === HandOfRun.FourSet) {
            hand.handOfRun = HandOfRun.NotIncluded;
        }
    });
}
