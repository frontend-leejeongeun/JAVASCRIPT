// while(조건){
//     조건이 참일 동안 실행
// }
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false; //조건이 거짓이므로 아무것도 출력되지 않음
//let isActive = true; //조건이 참이므로 무한루프
let i = 0;
while (isActive) {
  console.log("아직 살아있다!");
  if (i === 1000) {
    //조건이 거짓이 되지 않아서 무한루프
    break; //이 코드는 실행되지 않음
  }
  i++; //i가 1000이 되지 않아서 무한루프
} //아무것도 출력되지 않음

do {
  //조건이 거짓이므로 아무것도 출력되지 않음
  console.log("do-while 아직 살아있다!"); //do-while 아직 살아있다!
} while (isActive); //조건이 거짓이므로 아무것도 출력되지 않음
