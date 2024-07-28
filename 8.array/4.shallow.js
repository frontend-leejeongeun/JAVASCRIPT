// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
const pizza = { name: '🍕', price: 2, owner: { name: 'jeongeun' } };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [ramen, sushi];
const store2 = Array.from(store1);

console.log('type', typeof pizza) // type object
console.log('type', typeof pizza.price) // type number

const store7 = Array.from(pizza)//
console.log('store7', store7) //store7 []
console.log('store7', store7.name)//


console.log('store1', store1); // store1 [ { name: '🍜', price: 3 }, { name: '🍣', price: 1 } ]
console.log('store2', store2); // store2 [ { name: '🍜', price: 3 }, { name: '🍣', price: 1 } ]

store2.push(pizza);
console.log('store1', store1); // store1 [ { name: '🍜', price: 3 }, { name: '🍣', price: 1 } ]
console.log('store2', store2);
// store2 [
//   { name: '🍜', price: 3 },
//   { name: '🍣', price: 1 },
//   { name: '🍕', price: 2, owner: { name: 'jeongeun' } }
// ]
sushi.price = 4;
console.log('store1', store1); // [ { name: '🍜', price: 3 }, { name: '🍣', price: 4 } ]
console.log('store2', store2);
// store2 [
//   { name: '🍜', price: 3 },
//   { name: '🍣', price: 4 },
//   { name: '🍕', price: 2, owner: { name: 'jeongeun' } }
// ]
