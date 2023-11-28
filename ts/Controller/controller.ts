// ユーザの入力を受け取り、それを処理する。
function handleUserInput(type: string) {
  let handDataList = getData(type);

  let handListForDisplay = processHandForDisplay(handDataList);
  return handListForDisplay;
}
