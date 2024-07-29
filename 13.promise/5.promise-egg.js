function fetchEgg(chicken) {
  // 🐔 => 🥚
  return Promise.resolve(`${chicken} => 🥚`); // Promise객체를 만들어서 반환
}

function fryEgg(egg) {
  // 🥚 => 🍳
  return Promise.resolve(`${egg} => 🍳`); // Promise객체를 만들어서 반환
}

function getChicken() {
  // 🪴 => 🐓
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!")); // Promise객체를 만들어서 반환
  //return Promise.resolve(`🪴 => 🐓`);
}

getChicken() // Promise객체를 반환
  .catch(() => "🐔") // Promise객체를 반환 // 에러가 발생하면 ''를 반환
  .then(fetchEgg) // Promise객체를 반환 // fetchEgg함수를 실행하고 Promise객체를 반환
  .then(fryEgg) // Promise객체를 반환 // fryEgg함수를 실행하고 Promise객체를 반환
  .then(console.log); // Promise객체를 반환 // console.log함수를 실행하고 Promise객체를 반환

//이렇게 여러개의 Promise를 체이닝 할 경우 catch 의 위치는 중요하다.
//catch는 Promise객체가 rejected 상태가 되었을때 실행된다.
//catch 의 위치는 중요하다. Promise객체가 rejected 상태가 되었을때 catch가 실행되면 그 이후의 then은 실행되지 않는다.
