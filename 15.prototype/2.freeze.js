// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: "엘리" };
const dog = { name: "와우", emoji: "🐶", owner: ellie };
Object.freeze(dog); // 얕은 꽁꽁 얼림 // dog.owner.name = '엘리얌'; // TypeError
dog.name = "멍멍";
console.log(dog); // { name: '와우', emoji: '🐶' }
dog.age = 4;
console.log(dog); // { name: '와우', emoji: '🐶' }
delete dog.name;
console.log(dog); // { name: '와우', emoji: '🐶' }
ellie.name = "엘리얌";
console.log(dog); // { name: '와우', emoji: '🐶' }

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat); // 밀봉
console.log(cat); // { name: '와우', emoji: '🐶' }
cat.name = "냐옹";
console.log(cat); // { name: '냐옹', emoji: '🐶' }
delete cat.emoji;
console.log(cat); // { name: '냐옹' }

console.log(Object.isFrozen(dog)); // true
console.log(Object.isSealed(cat)); // true

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
tiger.name = "어흐응";
console.log(tiger); // { name: '어흥' }
delete tiger.name;
console.log(tiger); // { name: '어흥' }
tiger.age = 1;
console.log(tiger); // { name: '어흥' }
