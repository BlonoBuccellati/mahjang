function displayData(event: any) {
  event.preventDefault();
  var type = document.querySelector('#type');
  let type2: string = type?.textContent ? type?.textContent : ''; //truethyであるか確認。そもそも厳密型付けすると、nullやundefinedはstring型の引数に渡せない。
  var processedData = handleUserInput(type2);
  createDisplay(processedData);
  alert('userinput');
}

function createDisplay(processedData: any[]) {
  processedData.forEach((hand) => {
    const input: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    const name: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    const fan: HTMLDivElement = <HTMLDivElement>document.createElement('div');
    const condition: HTMLDivElement = <HTMLDivElement>document.createElement('div');

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
