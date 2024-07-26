// 접근제어자 -캡슐화 : 객체의 속성과 메소드를 외부에서 접근하지 못하도록 제한하는 것
// private, public, protected
class Fruit {
  #name; //private field : 클래스 내부에서만 접근 가능
  #emoji;
  #type = "과일";

  constructor(name, emoji) {
    //생성자 함수
    this.name = name; //public field : 외부에서도 접근 가능
    this.emoji = emoji;
  }

  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
// apple.#name = "오렌지"; // #field는 외부에서 접근이 불가능함
console.log(apple); //Fruit { #name: 'apple', #emoji: '🍎', #type: '과일' }

delete apple.name; //public field는 삭제 가능
console.log(apple); //Fruit { #name: 'apple', #emoji: '🍎', #type: '과일' }

console.log("Fruit", Fruit); //Fruit [class Fruit]
