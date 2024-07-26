const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y }; //객체의 속성명과 변수명이 같다면 축약해서 사용가능
console.log(coordinate); //{ x: 0, y: 0 }

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

makeObj("마루", 17); //{ name: '마루', age: 17 }
