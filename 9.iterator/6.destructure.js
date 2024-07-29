// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ["🍏", "🥝", "🍓", "🍌"];
const [first, second, ...others] = fruits; // 배열을 구조 분해 할당
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // ['🍓', '🍌']

const point = [1, 2]; // 배열
const [y, x, z = 0] = point; // 배열을 구조 분해 할당 // z는 기본값을 0으로 설정
console.log(x); // 2
console.log(y); // 1
console.log(z); // 0

function createEmoji() {
  // 함수
  return ["apple", "🍎"]; // 배열을 리턴
}

//react에서는 이런식으로 많이 사용
const [title, emoji] = createEmoji(); // 배열을 구조 분해 할당 // title, emoji에 각각 할당 // title은 apple, emoji는 🍎 // 배열의 첫번째, 두번째 요소를 할당
console.log(title); // apple
console.log(emoji); // 🍎

const ellie = { name: "Ellie", age: 20, job: "s/w engineer" }; // 객체
function display({ name, age, job }) {
  // 객체를 구조 분해 할당
  console.log("이름", name); // 이름 // name
  console.log("나이", age); // 나이 // age
  console.log("직업", job); // 직업 // job
}
display(ellie); // ellie 객체를 전달 // display 함수 호출

const { name, age, job: occupation, pet = "강아지" } = ellie; // 객체를 구조 분해 할당 // pet은 기본값을 강아지로 설정
console.log(name); // Ellie
console.log(age); // 20
console.log(occupation); // s/w engineer
console.log(pet); // 강아지

// Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color }, styles: { size } }) {
  console.log(color); // black
  console.log(size); // 20
}
changeColor(prop);
