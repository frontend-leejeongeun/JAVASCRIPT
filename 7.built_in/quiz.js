//1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
for(let i=0; i<text.length; i++){
  //console.log(text.charAt(i)) //내가짠것
  console.log(text[i])
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
const ArrIds = ids.split(',')
console.log(ArrIds)


//3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
// const intervalID = setInterval(updateTime, 1000,);

// function updateTime() {
//   const now = new Date();
//   console.log(now.toLocaleString('ko-KR'))
// }

// console.log(intervalID)

setInterval(() =>{
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'))
},1000)