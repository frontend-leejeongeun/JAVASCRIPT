"use strict";
/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저: window
 *  - 노드: 모듈
 */
const x = 0; // 글로벌 컨텍스트에 선언된 변수
module.exports.x = x; // 노드에서는 module.exports로 글로벌 변수를 선언
console.log(this); //{ x: 0 }
console.log(globalThis); // globalThis
// globalThis.setTimeout()
// setTimeout()
//console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log("fun", this); //undefined;
}
fun(); // fun undefined

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name); // 냐옹, 미야옹
  };
}
const cat1 = new Cat("냐옹");
const cat2 = new Cat("미야옹");
cat1.printName();
cat2.printName();
