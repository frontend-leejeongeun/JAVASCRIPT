// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체다! 라는것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있어. for...of, spread operator, destructuring assignment, ... 등등

const array = [1, 2, 3]; // 이건 Array 객체야! // Array.prototype[Symbol.iterator](): IterableIterator<T>;
console.log(array.values()); // Array Iterator {} // Array.prototype.values(): IterableIterator<T>;
console.log(array.entries()); // Array Iterator {} // Array.prototype.entries(): IterableIterator<[number, T]>;
console.log(array.keys()); // Array Iterator {} // Array.prototype.keys(): IterableIterator<number>;

// iterator 사용해 보기!
const iterator = array.values(); // Array Iterator {} // Array.prototype.values(): IterableIterator<T>;
while (true) {
  // 무한 루프
  const item = iterator.next(); // { value: 1, done: false } // { value: 2, done: false } // { value: 3, done: false } // { value: undefined, done: true }
  if (item.done) break; // false // false // false // true
  console.log(item.value); // 1 // 2 // 3
}

for (let item of array) {
  // 1 // 2 // 3
  console.log(item); // 1 // 2 // 3
}

for (let item of array.values()) {
  // 1 // 2 // 3
  console.log(item); // 1 // 2 // 3
}

const obj = { id: 123, name: "Ellie" };
for (const key in obj) {
  console.log(key);
}
