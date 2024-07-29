// Set
const set = new Set([1, 2, 3]); // Set 객체 생성
console.log(set); // Set 객체 출력 // Set { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // Set 객체의 사이즈 출력 // 3

// 존재하는지 확인
console.log(set.has(2)); // Set 객체에 2가 있는지 확인 // true
console.log(set.has(6)); // Set 객체에 6이 있는지 확인 // false

// 순회
set.forEach((item) => console.log(item)); // Set 객체를 순회하면서 출력
for (const value of set.values()) {
  // Set 객체의 값들을 순회하면서 출력
  console.log(value); // Set 객체의 값 출력 // 1 // 2 // 3
}

// 추가
set.add(6); // Set 객체에 6을 추가
console.log(set); // Set 객체 출력 // Set { 1, 2, 3, 6 }
set.add(6); // Set 객체에 6을 추가
console.log(set); // Set 객체 출력 // Set { 1, 2, 3, 6 } // 중복은 추가되지 않는다

// 삭제
set.delete(6); // Set 객체에서 6을 삭제
console.log(set); // Set 객체 출력 // Set { 1, 2, 3 }

// 전부 삭제
set.clear(); // Set 객체를 비운다
console.log(set); // Set 객체 출력 // Set {}

// 오브젝트 세트
const obj1 = { name: "🍎", price: 8 }; // 오브젝트 생성
const obj2 = { name: "🍌", price: 5 }; // 오브젝트 생성
const objs = new Set([obj1, obj2]); // Set 객체 생성
console.log(objs); // Set 객체 출력 // Set { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// 퀴즈
obj1.price = 10; // obj1의 price를 변경
objs.add(obj1); // obj1을 추가
console.log(objs); // Set 객체 출력 // Set { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } }

const obj3 = { name: "🍌", price: 5 }; // 오브젝트 생성
ojcs.add(obj3); // obj3을 추가
console.log(ocjs); // Set 객체 출력 // Set { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 5 } }
