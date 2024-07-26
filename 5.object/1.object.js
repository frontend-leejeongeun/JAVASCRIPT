// Object literal {key:value} // 객체 리터럴
// new Object() // 생성자 함수
// Object.create(); // 객체 생성
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
  name: "apple",
  "hello-bye": "✋",
  0: 1,
  ["hello-bye1"]: "✋✋",
};

// 속성, 데이터에 접근하기 위해서는
// apple.name; // 마침표 표기법 dot notation //✋
// console.log(apple["hello-bye1"]); // 대괄호 표기법 bracket notation //✋✋
// apple["name"];

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji); //🍎
console.log(apple["emoji"]); //🍎
//console.log(apple[emoji]); //error

console.log(apple);
// 속성 삭제
delete apple.emoji; //emoji값 아직 들어있음 // { name: 'apple', 'hello-bye': '✋', '0': 1, 'hello-bye1': '✋✋', emoji: '🍎' }
console.log(apple); //emoji값 삭제됨 // { name: 'apple', 'hello-bye': '✋', '0': 1, 'hello-bye1': '✋✋' }
