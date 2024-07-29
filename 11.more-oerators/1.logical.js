// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: "🐶" };
const obj2 = { name: "🐱", owner: "Ellie" };

if (obj1 || obj2) {
  // obj1이 true이면 obj2는 확인하지 않는다
  console.log("둘다 true!"); //둘다 true!
}

//단축평가 short-circuit evaluation
//조건문 밖에서 쓰면 단축평가된다
let result = obj1 && obj2;
console.log(result); // { name: '🐱', owner: 'Ellie' } //obj1이 true이면 obj2를 반환

result = obj1 || obj2; //obj1이 true이면 obj1을 반환
console.log(result); // { name: '🐶' }

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐주인!";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인!";
}

obj1.owner && changeOwner(obj1); //obj1.owner가 true이면 changeOwner(obj1) 실행
obj2.owner && changeOwner(obj2); //obj2.owner가 true이면 changeOwner(obj2) 실행
console.log("obj1", obj1); // { name: '🐶', owner: '새로운주인!' }
console.log("obj2", obj2); // { name: '🐱', owner: 'Ellie' }

obj1.owner || makeNewOwner(obj1); //obj1.owner가 false이면 makeNewOwner(obj1) 실행 //obj1.owner가 true이면 obj1.owner를 반환 //obj1.owner가 false이면 makeNewOwner(obj1) 실행
obj2.owner || makeNewOwner(obj2); //obj2.owner가 false이면 makeNewOwner(obj2) 실행 //주인이 있어서 실행되지 않음
console.log(obj1); // { name: '🐶', owner: '새로운주인!' }
console.log(obj2); // { name: '🐱', owner: 'Ellie' }

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 }; //item에 price값을 넣어줌
const price = item && item.price; //item이 true이면 item.price를 반환 //item이 false이면 item을 반환
console.log(price); // 1

// 기본값을 설정 //default parameter
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  //message값을 넣어줌
  const text = message || "Hello"; //message가 true이면 message를 반환 //message가 false이면 'Hello'를 반환
  console.log(text); //Hello
}
print(); //Hello //message가 없으므로 'Hello'를 반환
print(undefined); //Hello //message가 undefined이므로 'Hello'를 반환
print(null); //Hello //message가 null이므로 'Hello'를 반환
print(0); //Hello //message가 0이므로 message를 반환
print("메세지보냅니다"); //메세지보냅니다 //message가 true이므로 message를 반환
print(""); //Hello //message가 ''이므로 'Hello'를 반환
