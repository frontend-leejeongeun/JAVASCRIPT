// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a); // 1
console.log(b); // 2

// 객체타입은 참조값(메모리주소, 레퍼런스)이 복사되어 전달됨
let apple = {
  //0x1234
  name: "사과",
};

let orange = apple; // apple의 레퍼런스 0x1234가 orange에 복사됨
orange.name = "오렌지";

console.log(apple); // { name: '오렌지' }
console.log(orange); // { name: '오렌지' }
console.log(apple.name); // 오렌지
