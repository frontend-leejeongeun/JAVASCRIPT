// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! ⏱

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback함수를 전달 해야 함");
  }
  if (!seconds || seconds < 0) {
    throw new Error("seconds는 0보다 커야 함");
  }
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => {
    console.log("타이머 완료!");
  }, 2);
} catch (error) {}

// 함수 실행 순서
// runInDelay 함수가 정의됩니다.
// try 블록 내에서 runInDelay 함수가 호출됩니다.
// runInDelay 함수는 callback과 seconds 인자를 검사합니다.
// 두 조건이 모두 통과되면 setTimeout 함수가 호출되어 2초 후에 콜백 함수가 실행되도록 설정됩니다.
// try 블록 내에서 에러가 발생하지 않으면 catch 블록은 실행되지 않습니다.
// 2초 후, setTimeout에 의해 콜백 함수가 호출되어 "타이머 완료!" 메시지를 콘솔에 출력합니다.

// 상세 설명
// 자바스크립트는 코드를 위에서 아래로 순차적으로 실행합니다.
// 함수 정의 부분은 실행되지 않고 단지 함수가 정의됩니다.
// try 블록이 실행되면서 runInDelay 함수가 호출됩니다.
// runInDelay 함수가 호출될 때 함수 본문이 실행되며, 조건문들이 순차적으로 실행됩니다.
// 조건문들이 통과되면 setTimeout이 호출되어 콜백 함수가 스케줄링됩니다.
// try 블록이 성공적으로 실행되면 catch 블록은 실행되지 않습니다.
// 2초 후에 콜백 함수가 실행되어 "타이머 완료!" 메시지를 출력합니다.
