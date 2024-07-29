const text = "hello";
function func() {
  console.log(text); // hello
}
func(); // hello

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`); // inside inner: 0
  }
  return inner; // inner 함수를 리턴
}
const func1 = outer(); // inner 함수를 func1에 할당
func1(); // inside inner: 0
