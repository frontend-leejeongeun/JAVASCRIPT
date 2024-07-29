let count = 0;
export function increase() {
  //increase 함수를 만들어줌
  count++; //count에 1을 더해줌
  console.log(count); //count를 출력
}
export function getCount() {
  //getCount 함수를 만들어줌
  return count; //count를 반환
}

//export를 사용하여 내보낼 때는 받아올 때 {}를 사용하여 동일한 이름으로 받아옴
//export만 사용할 때는 as 사용하여 이름 변경 가능
//export default를 사용하여 내보낼 때는 받아올 때 {}를 사용하지 않음 이름도 변경 가능
//export default는 한 파일에서 한 번만 사용 가능

//이런방법도 있지만 가급적 getter, setter를 사용하여 값을 변경하는 것이 좋음
// getter setter는 값을 변경할 때 특정한 로직을 추가할 수 있음
// getter : 특정 값을 조회할 때 사용
// setter : 특정 값을 설정할 때 사용
// getter setter는 함수가 아니므로 ()를 사용하지 않음
// getter setter는 변수처럼 사용할 수 있음
