// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 퀴즈 함수로 만들기
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      const max = maxValue;
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > max };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (num) => num * 2);
console.clear();
for (const num of multiple) {
  console.log(num);
}
// 0;
// 2;
// 4;
// 6;
// 8;
// 10;
// 12;
// 14;
// 16;
// 18;
// 20;
// 22;
// 24;
// 26;
// 28;
// 30;
// 32;
// 34;
// 36;
// 38;

const single = makeIterable(0, 20, (num) => num);
for (const num of single) {
  console.log(num);
}
// 0;
// 1;
// 2;
// 3;
// 4;
// 5;
// 6;
// 7;
// 8;
// 9;
// 10;
// 11;
// 12;
// 13;
// 14;
// 15;
// 16;
// 17;
// 18;
// 19;
