// 실생활 비유
// 비유를 통해 다시 한 번 설명드릴게요.

// 단순 함수 호출은 마치 혼자서 계획한 대로 바로 일을 처리하는 것과 같습니다. 예를 들어, 아침에 일어나서 바로 세수를 하는 것처럼요.

// 콜백 함수는 마치 다른 사람에게 어떤 일을 부탁하고, 그 일이 끝난 후에 해야 할 일을 정하는 것과 같습니다. 예를 들어, 친구에게 전화를 걸어서 물건을 사달라고 부탁하고, 친구가 물건을 사서 돌아오면 돈을 주는 것과 같습니다.

function buyGroceries() {
  console.log("Groceries bought!");
}

function goShopping(task) {
  console.log("Going shopping...");
  setTimeout(task, 2000); // 2초 후에 전달받은 task 함수 호출
}

goShopping(buyGroceries); // "Going shopping..." 출력 후 2초 후에 "Groceries bought!" 출력

// 이 예시에서 buyGroceries 함수는 2초 후에 호출되므로, 콜백 함수로 사용되었습니다.

// 비동기 작업과 콜백 함수
// 콜백 함수는 특히 비동기 작업에서 많이 사용됩니다. 예를 들어, 네트워크 요청이 완료되었을 때, 파일을 다 읽었을 때 등 특정 작업이 완료된 후 후속 작업을 처리하는 데 사용됩니다.

function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { user: "John Doe" };
    callback(data); // 데이터를 가지고 콜백 함수 호출
  }, 3000); // 3초 후에 데이터 가져오기 완료
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData); // "Fetching data..." 출력 후 3초 후에 "Processing data: { user: 'John Doe' }" 출력

// 여기서 fetchData 함수는 데이터를 가져오는 비동기 작업을 수행하고, 3초 후에 데이터를 가지고 processData 콜백 함수를 호출합니다.

// 요약
// 콜백 함수는 다른 함수의 인자로 전달되어, 특정 조건이 만족될 때 호출되는 함수입니다.
// 같은 함수를 만들더라도 그 함수가 인자로 전달되어 실행되면 콜백 함수가 됩니다.
// 콜백 함수는 비동기 작업에서 매우 유용하게 사용되며, 특정 작업이 완료된 후 후속 작업을 처리할 수 있게 합니다.
// 이제 콜백 함수에 대한 개념이 좀 더 명확해졌기를 바랍니다! 추가로 궁금한 점이 있으면 언제든지 질문해주세요.
