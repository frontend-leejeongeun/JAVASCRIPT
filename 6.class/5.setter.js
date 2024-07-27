// class Tiger{
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹장');
//   }
//   sleep(){
//     console.log('자장');
//   }
// }

// class Dog{
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹장');
//   }
//   sleep(){
//     console.log('자장');
//   }
//   play(){
//     console.log('놀장');
//   }
// }

class Animal{
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('먹장');
  }
  sleep(){
    console.log('자장');
  }
}

class Tiger extends Animal{}
//const tiger2 = new Tiger; // 속성을 지정 안함
//console.log('tiger2',tiger2) // Tiger { color: undefined }
const tiger = new Tiger('노랑이');
console.log(tiger) // Tiger { color: '노랑이' }
tiger.sleep(); //자장
tiger.eat(); //먹장

class Dog extends Animal {
  constructor(color, ownerName){
    super(color);
    this.ownerName = ownerName;
  }
  play(){
    console.log('마루야 놀장');
  }
}

const dog = new Dog('마루','정은이');
console.log('dog',dog); //dog Dog { color: '마루', ownerName: '정은이' }
dog.play(); // 마루야 놀장
dog.eat(); // 먹장