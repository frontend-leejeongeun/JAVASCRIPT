const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍌"],
]);
console.log(map); //Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

//사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인
console.log(map.has("key1")); //true //map에서 has는 key값으로 확인가능
console.log(map.has("key6")); //false

//순회
map.forEach((value, key) => console.log(key, value)); // key1 🍎 // key2 🍌
console.log(map.keys()); // { 'key1', 'key2' }
console.log(map.values()); // { '🍎', '🍌' }
console.log(map.entries()); // { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

//찾기
console.log(map.get("key1")); // 🍎
console.log(map.get("key2")); // 🍌
console.log(map.get("key4")); // undefined

//추가
map.set("key3", "🥝");
console.log(map); //Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

//전부 삭제
map.clear();
console.log(map); // Map(0) {}

//오브젝트와의 큰 차이점??
const key = { name: "milk", price: 10 }; //key값이 오브젝트인 경우
const milk = { name: "milk", price: 10, description: "맛있는우유" }; //value값
const obj = {
  //오브젝트 생성
  [key]: milk, //key값이 오브젝트인 경우
};
console.log(obj);
// { '[object Object]': { name: 'milk', price: 10, description'맛있는우유' } }
const map2 = new Map([[key, milk]]); //Map 생성
console.log(map2); //Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는우유' } }
console.log(obj[key]); //undefined
console.log(map2[key]); //undefined
console.log(map2.get(key)); //{ name: 'milk', price: 10, description: '맛있는우유' }

//map과 object의 차이점
//map은 key값으로 오브젝트를 사용할 수 있지만 object는 key값으로 오브젝트를 사용할 수 없다.
//map은 순서가 보장되지만 object는 순서가 보장되지 않는다.
//map은 iterable하다. object는 iterable하지 않다.
//map은 size를 사용할 수 있지만 object는 size를 사용할 수 없다. 인터페이스가 다르다
//map은 clear를 사용할 수 있지만 object는 clear를 사용할 수 없다.
