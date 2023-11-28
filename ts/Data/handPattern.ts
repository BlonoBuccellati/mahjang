// enumのように使うので、値は使用しない。
const HandOfRun = {
  FourSet: 4,
  OverThreeSet: 3,
  OverTwoSet: 2,
  Either: 0,
  NotIncluded: undefined,
};

const HandOfTriple = {
  FourSet: 4,
  OverThreeSet: 3,
  OverTwoSet: 2,
  Either: 0,
  NotIncluded: undefined,
};

enum HandOfDyed {
  OnlyType = 1,
  ONlyTypeWithChar = 2,
  OverTwoType = 3,
  NotDyed = 0,
  // NeedThree= 5, //これはどっちかっていうと三色同順しか使ってない。あと三色同行。不要？
}

// 字牌系
const HandOfCharacters = {
  Mix: 7, //字牌
  Dragons: 3, //三元牌
  Winds: 4, //風牌
  Either: 0, //どちらでも
  NotIncluded: undefined, //字牌なし
};

// const HandOfHeadAndOld = {
//   OnlyHeadAndOld: 1, // 1と9のみ
//   IncludedHeadAndOld: 2, // 1/9あるやつ。チャンタなど。123
//   Either: 0,
//   NotIncluded: undefined,
// };

enum HandOfHeadAndOld {
  OnlyHeadAndOld = 1, // 1と9のみ
  IncludedHeadAndOld = 2, // 1/9あるやつ。チャンタなど。123
  Either = 0,
  NotIncluded = -1,
}
const HandOfIrregular = {
  True: true,
  False: false,
};
// 門前役かどうか これはいらない？？？
const HandOfCleanGate = {
  Clean: true,

  CanCry: {
    DownScore: 0,
    ConstantScore: 1,
  },
};
// 門前役でないとき、役にないていいかわるいか。（基本は泣いてもいいはず。三暗刻とかくらい。）
const CanCryToHand = {
  Can: true,
  Cannot: false,
};

// 4面子なので
const AllSet = 4;
// 役満
const FullScore = 100;
const DoubleFullScore = 200;
