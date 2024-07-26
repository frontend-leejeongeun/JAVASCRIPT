// 반복문 Loop Statement
// for (변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1.변수선언문
// 2. 조건식의 값이 참이면 {} 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될떄까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

//무한루프
//for (;;) {}

//반복문 제어 : continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("i가 10");
    continue; //다음 반복으로 넘어감 //여기서 멈추고 다시 for문을 돌림
    break; //이 코드는 실행되지 않음 //여기서 멈추고 for문을 끝냄
  }
  console.log(i);
}
