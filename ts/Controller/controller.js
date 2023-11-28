// ユーザの入力を受け取り、それを処理する。
function handleUserInput(type) {
    var handDataList = getData(type);
    var handListForDisplay = processHandForDisplay(handDataList);
    return handListForDisplay;
}
