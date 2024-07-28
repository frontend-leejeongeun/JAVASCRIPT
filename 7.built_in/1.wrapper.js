// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; //number 원시 타입

console.log(number.toString()) //string 원시 타입
console.log(number); // 123 number 원시 타입

const text = 'text'; // string 문자열 원시타입
console.log(text); //text
text.length; // String 객체
console.log(text.length); //4
text.trim();
console.log(text.trim('    text')); //text 공백제거
