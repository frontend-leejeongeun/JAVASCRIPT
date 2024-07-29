function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌"); // resolve를 통해서 값을 전달해줘야 함
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎"); // resolve를 통해서 값을 전달해줘야 함
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange")); //
}

// 바나나과 사과를 같이 가지고 오기
getBanana() //
  .then(
    (banana) =>
      getApple() //
        .then((apple) => [banana, apple]), //
  )
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits)); //all [ '🍌', '🍎' ]

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit)); //race 🍌

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);
//Promise.all중에 에러가 발생하는게 있다면 당연히 catch로 에러처리를 해줘야한다.

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
// all-settle은 성공하든 성공하든 실패하든 반환해주는것
//모든결과를 받아보고싶을때

//   all-settle [
//   { status: 'fulfilled', value: '🍌' },
//   { status: 'fulfilled', value: '🍎' },
//   {
//     status: 'rejected',
//     reason: Error: no orange
//         at getOrange (D:\git\JAVASCRIPT\13.promise\6.promse-all.js:18:25)
//         at Object.<anonymous> (D:\git\JAVASCRIPT\13.promise\6.promse-all.js:42:46)
//         at Module._compile (node:internal/modules/cjs/loader:1358:14)
//         at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//         at Module.load (node:internal/modules/cjs/loader:1208:32)
//         at Module._load (node:internal/modules/cjs/loader:1024:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//         at node:internal/main/run_main_module:28:49
//   }
// ]
