// class 객체를 손쉽게 만들 수 있는 템플릿
// 1.생성자 함수(오래된 고전적인 방법)
// 2.클래스 (다른 프로그래밍 언엉에서도 사용되는 방법)

// 클래스 class
class Fruit {
  //클래스 이름은 대문자로 시작
  constructor(nameEng, nameKo) {
    //생성자: new 키워드로 객체를 생성할때 호출되는 함수
    this.nameEng = nameEng; //this는 생성자 함수가 생성할 객체를 가리킨다.
    this.nameKo = nameKo;
  }
  display = () => {
    //constructor안에서 함수를 선언해도 되지만 밖에다 하는게 맞고 이럴경우 this는 삭제.
    console.log(`${this.nameEng}: ${this.nameKo}`);
  };
}

// apple은 Fruit의 인스턴스이다.
const apple = new Fruit("apple", "사과"); //new 키워드로 객체를 생성
// orange는 Fruit의 인스턴스이다.
const orange = new Fruit("orange", "오렌지");

console.log(apple);
console.log(orange);
console.log(apple.nameEng);
console.log(apple.nameKo);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "jeongeun" }; //클래스의 인스턴스가 아니다.  //객체 리터럴 {key:value} // 객체 리터럴은 클래스의 인스턴스가 아니다.
