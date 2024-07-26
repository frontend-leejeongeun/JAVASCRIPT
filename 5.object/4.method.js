//method : 객체에 속한 함수를 method라고 부른다.
const apple = {
  name: "apple",
  display: function () {
    //function 키워드를 사용하여 함수를 선언
    console.log(`${this.name}:사과`); //this는 객체 자신을 가리킨다.
  },
};

apple.display(); //apple:사과
