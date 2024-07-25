// typeof 데이터 타입을 확인
// 값을 타입 문자열로 변환
let variable;
console.log(typeof variable); //undefined

variable = ""; //string
console.log(typeof variable); //string

variable = 1; //number
console.log(typeof variable); //number

variable = true; //boolean
console.log(typeof variable); //boolean

variable = function () {}; //function 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable); //function

//javascript는 dynamic, weakly typed 언어이다.
