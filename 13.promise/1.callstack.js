function a() {
  for (let i = 0; i < 1000000000000000; i++); // 시간 지연
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log("시작했다!");
const result = c(); // 1 + 1 + 1
console.log(result);
console.log("끝!");

//실행순서 : 시작했다! -> 시간지연 -> 1 -> 1 -> 1 -> 끝!
// a함수 -> b함수 -> c함수 -> console.log("시작했다!") -> console.log(result) -> console.log("끝!") 순으로 실행됨
// a함수가 실행되는 동안 시간지연이 발생하므로 다음 함수인 b함수가 실행되지 않음
