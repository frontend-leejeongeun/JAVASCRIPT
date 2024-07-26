const obj = {
  name: "정은",
  age: 30,
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name; //정은
obj.age; //30

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key]; //obj.key로 하면 undefined //obj[key]로 해야함
}
console.log(getValue(obj, "age")); //30

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, "job", "engineer");
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, "age"); //age값 아직 들어있음
console.log(obj); //age값 삭제됨
