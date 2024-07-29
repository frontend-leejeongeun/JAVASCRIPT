// 스코프 : 식별자가 유요한 범위
// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = "a";
}
console.log(a); // ReferenceError: a is not defined
const b = "b";

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = "Hello World";
  console.log(message); // Hello World
}
console.log(message); // ReferenceError: message is not defined

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b); // ReferenceError: a is not defined
