// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0; //num에 0을 넣어줌
console.log(num || "-1"); //num이 true이면 num을 반환 //num이 false이면 -1을 반환 //0은 false이므로 -1을 반환
console.log(num ?? "-1"); //num의 값이 있는 지 없는지 확인 null, undefined이면 -1을 반환 //0은 null, undefined이 아니므로 0을 반환
