const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog)); // 프로퍼티 이름만 배열로 반환 // ['name', 'emoji']
console.log(Object.values(dog)); // 프로퍼티 값만 배열로 반환 // ['와우', '🐶']
console.log(Object.entries(dog)); // 프로퍼티 이름과 값의 배열을 배열로 반환 // [['name', '와우'], ['emoji', '🐶']]

console.log("name" in dog); // 프로퍼티 이름이 있는지 확인 // true
console.log(dog.hasOwnProperty("name")); // 프로퍼티 이름이 있는지 확인 // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog); // 프로퍼티 디스크립터를 반환
console.log(descriptors); // { name: { value: '와우', writable: true, enumerable: true, configurable: true }, emoji: { value: '🐶', writable: true, enumerable: true, configurable: true } }

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc); // { value: '와우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // ['emoji']
delete dog.name; // 삭제 불가능
console.log(dog.name); // 멍멍

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "영희",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "김",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});
console.log(student); // { firstName: '영희', lastName: '김' }
