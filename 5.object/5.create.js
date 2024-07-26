//생성자 함수 //객체를 생성하는 함수를 생성자 함수라고 한다.

// const apple = {
//   nameEng: "apple",
//   display: function () {
//     console.log(`${this.name}:사과`);
//   },
// };

// const orange = {
//   nameEng: "orange",
//   display: function () {
//     console.log(`${this.name}:오렌지`);
//   },
// };

//생성자 함수
function Fruit(nameEng, nameKo) {
  this.nameEng = nameEng; //this는 생성자 함수가 생성할 객체를 가리킨다.
  this.nameKo = nameKo;
  this.display = () => {
    //화살표 함수로 선언하면 this가 생성자 함수를 가리킨다.
    console.log(`${this.nameEng}: ${this.nameKo}`);
  };
  // return this; // 생략가능
}

const apple = new Fruit("apple", "사과");
const orange = new Fruit("orange", "오렌지");

console.log(apple); //Fruit { nameEng: 'apple', nameKo: '사과', display: [Function] }
console.log(orange); //Fruit { nameEng: 'orange', nameKo: '오렌지', display: [Function] }
console.log(apple.nameEng); //apple
console.log(apple.nameKo); //사과
apple.display(); //apple: 사과
