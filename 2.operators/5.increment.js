// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a); // 0
a++; // a = a + 1;
console.log(a); // 1
a--; // a = a - 1;
console.log(a); // 0

console.clear(); // console.clear()는 콘솔창을 깨끗하게 지워줍니다.
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
console.log(a++); // 0
console.log(a); // 1
let b = a++; // b = 1 , a++ = 2
console.log(a); // 2
console.log(b); // 1
console.log(a); // 2

a = 1; // a = 1
console.log(a); // 1
let c = ++a; // c = 2, ++a = 2
console.log(c); // 2
console.log(a); // 2
