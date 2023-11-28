// modelはデータを取得するだけ。（欲しいデータを全て）

// データ取得
function getData(type: string): Hand[] {
  // ここで、本当はfor文つかう？？（複数選択にするなら）
  switch (type) {
    case 'run':
      return getHandOfRun();
    case 'dye':
      return getHandOfDye();
    case 'triple':
      return getHandOfTriple();
    case 'headAndOld':
      return getHandOfOldHead();
    default:
      return getAllHand();
  }

  console.log(HandOfCharacters.Dragons);
}

// 全ての役を取得する。
function getAllHand(): Hand[] {
  return AllHand;
}

// 順子系を取得するメソッド
function getHandOfRun(): Hand[] {
  let handsOfRun: Hand[] = [];
  AllHand.forEach((hand) => {
    if (hand.handOfRun) {
      handsOfRun.push(hand);
    }
  });
  return handsOfRun;
}
// 刻子系を取得する
function getHandOfTriple(): Hand[] {
  let handsOfTriple: Hand[] = [];
  AllHand.forEach((hand) => {
    if (hand.handOfTriple) {
      handsOfTriple.push(hand);
    }
  });
  return handsOfTriple;
}
// 染め手系を取得する
function getHandOfDye(): Hand[] {
  let handsOfDye: Hand[] = [];
  AllHand.forEach((hand) => {
    if (hand.handOfDyed !== HandOfDyed.NotDyed) {
      handsOfDye.push(hand);
    }
  });
  return handsOfDye;
}

// 1/9系を取得する
function getHandOfOldHead(): Hand[] {
  let handsOfOldHead: Hand[] = [];
  AllHand.forEach((hand) => {
    if (hand.handOfHeadAndOld) {
      handsOfOldHead.push(hand);
    }
  });
  return handsOfOldHead;
}

// データを表示用に加工する。
function processHandForDisplay(handList: Hand[]): any[] {
  let handListForDisplay: any[] = [];
  handList.forEach((hand: Hand) => {
    let handForDisplay: any;
    handForDisplay = {
      name: null,
      fan: null,
      canCry: null,
      condition: null,
    };
    handForDisplay.name = hand.name;
    handForDisplay.fan = hand.fanNum + '翻';
    if (!hand.canCry) {
      handForDisplay.condition = '門前役';
    } else if (hand.canCry < hand.fanNum) {
      handForDisplay.condition = '鳴き' + hand.fanNum + '翻';
    } else {
      handForDisplay.condition = null; //鳴きに条件なし。
    }
    handListForDisplay.push(handForDisplay);
  });
  return handListForDisplay;
}
