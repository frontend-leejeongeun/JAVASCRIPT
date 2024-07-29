// [Symbol.iterator](): Iterator{ next():{value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3, ..., 9
// 0, 2, 4, 5, ..., 18

const multiple = {
  // 이터러블 객체를 만들어보자
  [Symbol.iterator]: () => {
    // Symbol.iterator를 통해 이터레이터를 만들어보자
    const max = 10; // 최대값을 정해주고
    let num = 0; // 0부터 시작하게끔
    return {
      // 이터레이터를 리턴해준다
      next() {
        // next 메소드를 통해 이터레이터를 순회하게끔
        return { value: num++ * 2, done: num > max };
        // value에는 num을 2배한 값, done에는 num이 max보다 크면 true를 리턴해준다
      },
    };
  },
};

for (const num of multiple) {
  // 이터러블 객체를 순회하면서
  console.log(num); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
}
