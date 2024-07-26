//함수 선언문 function name() { }
//함수 표현식 const name = function(){}
let add = function (a, b) {
  //함수 표현식
  return a + b; //함수를 호출한 곳으로 값을 반환
};
console.log(add(1, 2)); //3

//화살표 함수 const name = () => { }
add = (a, b) => a + b; //화살표 함수 //함수 표현식

console.log(add(1, 2)); //3

//생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

//IIFE (Immediately-Invoked Function Expressions)
(function run() {
  //함수 표현식
  console.log("😍");
})(); //함수를 선언함과 동시에 호출
