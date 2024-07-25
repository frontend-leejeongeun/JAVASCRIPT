// 퀴즈!
let num = 2;
//num의 숫자가 짝수이면 "짝수", 홀수이면 "홀수"를 출력하는 조건문을 작성해보세요.

//if
if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}
//ternary operator
num % 2 === 0 ? console.log("짝수") : console.log("홀수");
