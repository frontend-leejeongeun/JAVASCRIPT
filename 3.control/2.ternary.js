// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = "apple";
if (fruit === "apple") {
  // if fruit is apple
  console.log("🍎");
} else {
  // if fruit is not apple
  console.log("😍");
}
fruit === "apple" ? console.log("🍎") : console.log("😍");

let emoji = fruit === "apple" ? "🍎" : "😍";
console.log(emoji);
