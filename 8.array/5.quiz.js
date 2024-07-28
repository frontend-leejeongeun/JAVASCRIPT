// 퀴즈1
// 주어진 배열 안의 나 아이템을 라로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['가','나','다','나']
// output :['가','라','다','라']
function replace(array, from, to){
  const replaced = Array.from(array); // 데이터가 원시타입이므로 깊은복사가된다.
  for(let i=0; i<replaced.length; i++){
    if(replaced[i] === from){
      replaced[i] = to
    }
  }
  return replaced
}
const array = ['가','나','다','나'];
const result = replace(array,'나','라')
console.log(result) // [ '가', '라', '다', '라' ]
console.log(array) // [ '가', '나', '다', '나' ]

// 퀴즈2
// 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input : ['가','나','다','나'], '나'
// output : 2
function count(array, item){
  let counter = 0; 
  for(let i=0; i<array.length; i++){
    if(array[i] === item){
      counter++;
    }
  }
  return counter;
}
console.log(count(['가','나','다','나'],'나'))

// 퀴즈3
// 배열1,배열2 두개의 배열을 전달받아
// 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ['가','나','다'] ['가','나','바']
// output : ['가','나']
function match(input, search){
  const result = [];
  for(let i=0; i<input.length; i++){
    if(search.includes(input[i])){
      result.push(input[i])
    }
  }
  return result
}
console.log(match(['가','나','다'], ['가','나','바']))