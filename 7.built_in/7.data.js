// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 2024-07-28T07:24:23.338Z
console.log(new Date('Jun 5, 2022')); // 2022-06-04T15:00:00.000Z
console.log(new Date('2022-12-17T03:24:00')); // 2022-12-16T18:24:00.000Z

console.log(Date.now()); // 1722151463344
console.log(Date.parse('2022-12-17T03:24:00')); // 1671215040000

const now = new Date(); 
now.setFullYear(2023); 
now.setMonth(0); // 0: 1
console.log(now.getFullYear());// 2023
console.log(now.getDate()); // 28 // 0: 1
console.log(now.getDay()); // 6 // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime()); // 1674890663345
console.log(now); // 2023-01-28T07:24:23.345Z

console.log(now.toString()); // Sat Jan 28 2023 16:24:23 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); // Sat Jan 28 2023
console.log(now.toTimeString()); // 16:24:23 GMT+0900 (대한민국 표준시)
console.log(now.toISOString()); // 2023-01-28T07:24:23.345Z // ISO 8601 형식
console.log(now.toLocaleString('en-US')); // 1/28/2023, 4:24:23 PM
console.log(now.toLocaleString('ko-KR')); // 2023. 1. 28. 오후 4:24:23
