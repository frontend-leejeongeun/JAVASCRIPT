function add(a, b) {
  //함수선언문
  return a + b; //함수를 호출한 곳으로 값을 반환
}

const sum = add; //함수를 변수에 할당
//sum이 add를 가리킴
//sum과 add는 같은 함수를 가리킴
//sum과 add는 같은 함수를 참조
//sum과 add는 같은 함수를 가리키는 참조값을 가짐
//sum과 add는 같은 함수를 참조하는 참조값을 가짐

console.log(sum(1, 2)); //3
console.log(add(1, 2)); //3
