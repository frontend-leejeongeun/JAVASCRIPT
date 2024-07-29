function loop() {
  const array = [];
  // var과 let의 차이점!
  //var i = 0; 와 똑같음
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
      // 5, 5, 5, 5, 5
      // var은 함수 스코프를 가지기 때문에 i는 5가 된 상태로 클로저에 저장된다.
      // 따라서 i가 5가 되어있는 상태로 클로저에 저장되어있기 때문에 5가 출력된다.
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
