//static 정적 프로퍼티, 정적 메서드
class Fruit {
  static MAX_FRUITS = 10; //클래스 레벨의 프로퍼티
  constructor(name, emoji) {
    this.name = name; //인스턴스 레벨의 프로퍼티
    this.emoji = emoji;
  }

  //클래스레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit("banana", "🍌");
  }

  //인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana); //Fruit { name: 'banana', emoji: '🍌' }
console.log(Fruit.MAX_FRUITS); //10

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊");

console.log(apple); //Fruit { name: 'apple', emoji: '🍎' }
console.log(orange); //Fruit { name: 'orange', emoji: '🍊' }
console.log(apple.name); //apple
console.log(apple.emoji); //🍎
apple.display(); //apple: 🍎

Math.pow(); //Math.pow()는 Math 클래스의 메서드이다.
Number.isFinite(1); //Number.isFinite()는 Number 클래스의 메서드이다.
