// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 (좀 더 편리함을 위해)
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
const jeongeun = {
  name: "jeongeun",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(jeongeun);
console.log("jeongeun", jeongeun); //{ name: 'jeongeun', age: 20, eat: [Function: eat] }
console.log("json", json); //{"name":"jeongeun","age":20}

//함수는 객체의 프로퍼티가 아니기 때문에 변환되지 않는다!

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log("obj", obj); //{ name: 'jeongeun', age: 20 }
