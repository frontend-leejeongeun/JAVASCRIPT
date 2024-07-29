function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    //resolve, reject는 콜백함수이다.
    //resolve는 성공했을때 실행하는 콜백함수, reject는 실패했을 경우이다.
    //Promise객체를 만들때에는 new연산자를 사용해서 만들어야 한다
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음")); // reject는 새로운 에러 객체를 만들어 줘야 함 new Error이렇게 작성!
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("타이머 완료!")) //필요한 일을 수행
  .catch(console.error) //에러를 처리
  .finally(() => console.log("끝났다!")); //최종적으로 무조건 호출

//   Promise와 resolve, reject 콜백함수가 왜 필요한지 이해하려면, JavaScript의 비동기 처리를 어떻게 다루는지 알아야 합니다. 코드를 실행하면서 어떤 일이 일어나는지 단계별로 설명하겠습니다.

// runInDelay 함수 호출:

// runInDelay(2) 함수가 호출됩니다. 이 함수는 새로운 Promise 객체를 반환합니다.
// Promise 객체 생성:

// new Promise를 통해 새로운 Promise 객체가 생성됩니다.
// 이때, Promise의 생성자 함수는 두 개의 콜백 함수(resolve, reject)를 인자로 받습니다.
// 인자로 받은 콜백 함수 정의:

// resolve: 작업이 성공적으로 완료되었을 때 호출되는 함수입니다.
// reject: 작업이 실패했을 때 호출되는 함수입니다.
// if 문 검사:

// seconds 값이 0보다 작거나 없으면, reject 함수가 호출되고 새로운 Error 객체가 생성됩니다. 이 때, Promise는 rejected 상태가 됩니다.
// seconds 값이 0보다 크면, setTimeout이 호출됩니다.
// setTimeout 호출:

// setTimeout 함수는 주어진 시간(여기서는 seconds * 1000 밀리초) 후에 resolve 함수를 호출합니다.
// 이 경우 seconds가 2이므로, 2000밀리초(2초) 후에 resolve 함수가 호출됩니다.
// Promise 상태 전이:

// resolve 함수가 호출되면, Promise 객체는 fulfilled 상태로 전이됩니다.
// reject 함수가 호출되면, Promise 객체는 rejected 상태로 전이됩니다.
// .then 메서드:

// Promise가 fulfilled 상태가 되면, .then 메서드에 전달된 콜백 함수가 실행됩니다. 이 경우, console.log("타이머 완료!")가 출력됩니다.
// .catch 메서드:

// Promise가 rejected 상태가 되면, .catch 메서드에 전달된 콜백 함수가 실행됩니다. 에러가 console.error를 통해 출력됩니다.
// .finally 메서드:

// Promise의 상태와 상관없이, .finally 메서드에 전달된 콜백 함수가 실행됩니다. 이 경우, console.log("끝났다!")가 출력됩니다.

// 실행 순서 정리
// runInDelay(2) 호출
// 새로운 Promise 객체 생성
// seconds 값이 2이므로, setTimeout(resolve, 2000) 호출
// 2초 후 resolve 호출
// Promise가 fulfilled 상태로 전이
// .then 메서드의 콜백 함수 실행 (console.log("타이머 완료!"))
// .finally 메서드의 콜백 함수 실행 (console.log("끝났다!"))
// 예외적인 경우:

// runInDelay(0) 또는 runInDelay(-1) 호출
// 새로운 Promise 객체 생성
// seconds 값이 0 또는 음수이므로, reject 호출
// Promise가 rejected 상태로 전이
// .catch 메서드의 콜백 함수 실행 (console.error로 에러 출력)
// .finally 메서드의 콜백 함수 실행 (console.log("끝났다!"))
// 이 과정에서 resolve와 reject는 Promise의 상태를 변화시키고, 그에 따라 이후에 실행될 콜백 함수들을 제어하기 위해 사용됩니다.
