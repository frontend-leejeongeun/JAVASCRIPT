// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  // 3개의 인자를 받아서 더하는 함수
  return a + b + c; // 3개의 인자를 더해서 리턴
}

const nums = [1, 2, 3]; // 1, 2, 3을 가지고 있는 배열
console.log(add(...nums)); // 배열을 펼쳐서 함수에 전달

// Rest parameters
function sum(first, second, ...nums) {
  // 첫번째, 두번째 인자를 받고 나머지는 배열로 받는다
  console.log(nums); // 나머지 인자들을 출력
}
sum(1, 2, 0, 1, 2, 4); // 1, 2, 0, 1, 2, 4를 인자로 전달

// Array Concat
const fruits1 = ["🍏", "🥝"];
const fruits2 = ["🍓", "🍌"];
let arr = fruits1.concat(fruits2); // 배열을 합친다 // concat은 원본을 변경하지 않는다
console.log(arr); // 합친 배열을 출력
arr = [...fruits1, "🍓", ...fruits2]; // 배열을 합친다 // spread 연산자를 사용 // 원본을 변경하지 않는다 // ES6
console.log(arr); // 합친 배열을 출력

// Object
const ellie = { name: "Ellie", age: 20, home: { address: "home" } }; // 객체
const updated = {
  // ellie 객체를 복사하면서 job을 추가
  ...ellie, // ellie 객체를 복사 // spread 연산자를 사용
  job: "s/w engineer", // job을 추가
};
console.log(ellie); // ellie 객체 출력
console.log(updated); // updated 객체 출력
