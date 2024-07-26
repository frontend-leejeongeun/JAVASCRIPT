// 논리연산자 Logical Operators
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)

let num = 8;

if (num >= 0 && num > 20) {
  console.log("👍"); // 아무것도 출력되지 않음
}

if (num >= 0 || num > 20) {
  console.log("👍"); // 👍
}

console.log(true && true); // true //둘다 true면 true
console.log(true && false); // false //하나라도 false면 false
console.log(false && true); // false //하나라도 false면 false
console.log(false && false); // false //둘다 false면 false

console.log(true || true); // true //둘다 true면 true
console.log(true || false); // true //하나라도 true면 true
console.log(false || true); // true //하나라도 true면 true
console.log(false || false); // false //둘다 false면 false

console.log("text"); //text //true
console.log(!"text"); //false //부정
console.log(!!"text"); //true //불리언값으로 변환
console.log(!!0); //false //불리언값으로 변환
console.log(!!1); //true //불리언값으로 변환
console.log(!!""); //false //불리언값으로 변환
console.log(!!null); //false //불리언값으로 변환
console.log(!!undefined); //false //불리언값으로 변환
console.log(!!NaN); //false //불리언값으로 변환
