//매개변수의 기본값은 무조건 undefined이다.
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
//매개변수 기본값 Default Parameters a = 1, b = 1

function add(a = 1, b = 1) {
  //a=1, b=1
  console.log(a); //1
  console.log(b); //1
  console.log(arguments); //{ '0': 1, '1': 2 }
  console.log(arguments[1]); //2
  return a + b; //3
}
add(); //3

// Rest 매개변수 Rest Parameters
function sum(a, b, ...number) {
  //a=1, b=2, number=[3,4,5,6,7,8]
  console.log(a); //1
  console.log(b); //2
  console.log(number); //[3,4,5,6,7,8]
}

sum(1, 2, 3, 4, 5, 6, 7, 8); //1 2 [3,4,5,6,7,8]
