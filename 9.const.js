//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = "hello";
//text = 'hi'; 이렇게 하면 안됨 에러남

//1.상수
const MAX_FRIUTS_COUNT = 5;

//2.재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
};
//apple = {}  이렇게 하면 안됨 에러남
console.log(apple); //apple
apple.name = "green";
console.log(apple); //green
