//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 함수를 실행
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
//function iterate(max, action)

//내가 한 방법
const multiply = (a) => a * 2; //화살표함수 //함수를 변수에 할당

function iterate(max, action) {
  //함수선언문
  for (let i = 0; i < max; i++) {
    //변수선언문
    //console.log(i);
    console.log(action(i)); //함수를 호출한 곳으로 값을 반환
  }
}
iterate(5, multiply);

//강사의 코드
function iterate(max, action) {
  //함수선언문
  for (let i = 0; i < max; i++) {
    //변수선언문
    action(i); //함수를 호출한 곳으로 값을 반환
  }
}

function log(num) {
  //함수선언문
  console.log(num); //함수를 호출한 곳으로 값을 반환
}

function doubleAndLog(num) {
  //함수선언문
  console.log(num * 2); //함수를 호출한 곳으로 값을 반환
}
iterate(3, (num) => console.log(num)); //함수를 호출한 곳으로 값을 반환 //0,1,2
iterate(3, (num) => console.log(num * 2)); //함수를 호출한 곳으로 값을 반환 //0,2,4

setTimeout(() => {
  //함수선언문 //3초뒤 이 함수가 실행될거예요
  console.log("3초뒤 이 함수가 실행될거예요"); //함수를 호출한 곳으로 값을 반환
}, 3000); //3000ms = 3초
