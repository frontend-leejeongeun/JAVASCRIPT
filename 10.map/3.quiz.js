// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];

function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

const sets = new Set(array); // 중복 제거
return [sets]; // sets 를 배열로 return

// const newArr = new Set([...fruits]);
// console.log(newArr); // { '🍌', '🍎', '🍇', '🍑' }

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));

//내가짠거
// for (let i = 0; i < set1.length; i++) {
//   if (set1[i] === set2[1]) {
//     const set3 = set1[i];
//     //console.log(set3);
//   }
// }

// set1.forEach((value) => console.log({ set1: value, set2: set2.has(value) }));

//console.log(set1);
//console.log(set2);
