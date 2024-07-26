// 사용예제 1
function add(a, b) {
  //함수선언문
  console.log("function");
  return a + b; //함수를 호출한 곳으로 값을 반환
}

const result = sum(1, 2); //함수를 호출하고 반환값을 result에 저장
console.log(result); //3

// 사용예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName)); //지수 김

let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2)); //철수 박
