// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 }; //item에 price값을 넣어줌
const price = item?.price; //item이 true이면 item.price를 반환 //item이 false이면 item을 반환
console.log(price); // 1

let store = { dress: 3 };
const cloth = store?.price;
console.log(cloth); //undefined
const cloths = store?.dress;
console.log(cloths); //3

let obj = { name: "🐶", owner: { name: "엘리" } }; //obj에 name과 owner.name값을 넣어줌
function printName(obj) {
  //printName함수 생성
  const ownerName = obj?.owner?.name; //obj.owner.name값을 ownerName에 넣어줌 //obj.owner.name값이 없으면 undefined를 반환
  console.log(ownerName); //엘리
}
printName(obj); //엘리
