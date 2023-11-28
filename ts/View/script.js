function displayData(event) {
    event.preventDefault();
    var type = document.querySelector('#type');
    var type2 = (type === null || type === void 0 ? void 0 : type.textContent) ? type === null || type === void 0 ? void 0 : type.textContent : ''; //truethyであるか確認。そもそも厳密型付けすると、nullやundefinedはstring型の引数に渡せない。
    var processedData = handleUserInput(type2);
    createDisplay(processedData);
    alert('userinput');
}
function createDisplay(processedData) {
    processedData.forEach(function (hand) {
        var input = document.createElement('div');
        var name = document.createElement('div');
        var fan = document.createElement('div');
        var condition = document.createElement('div');
        name.textContent = hand.name + '　　　';
        fan.textContent = hand.fan + '　　　';
        condition.textContent = hand.condition + '　　　';
        input.appendChild(name);
        input.appendChild(fan);
        input.appendChild(condition);
        input.style.display = 'flex';
        document.body.appendChild(input);
    });
}
