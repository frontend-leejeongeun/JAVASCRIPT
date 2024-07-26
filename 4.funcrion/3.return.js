// return을 명시적으로 하지 않으면 자동으로 undefined를 반환한다.
function add(a, b) {
  //return a + b; //함수를 호출한 곳으로 값을 반환
  return undefined; //return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
}

const result = add(1, 2); //함수를 호출하고 반환값을 result에 저장
console.log(result); //undefined

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예 : 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  //함수선언문
  if (num < 0) {
    //만약 num이 0보다 작다면
    return; //함수를 종료
  } //조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
  console.log(num); //num을 출력
}

print(12); //12
print(-12); //undefined
