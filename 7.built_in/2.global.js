console.log(globalThis);
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */}

console.log(this); // {}
console.log(Infinity); //Infinity
console.log(NaN); // NaN
console.log(undefined); // undefined

eval('const num = 2; console.log(num)');
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); //12.43
console.log(parseInt('12.43')); //12
console.log(parseInt('11')); //11

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded); // https://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com

const decoded = decodeURI(encoded);
console.log(decoded); // https://드림코딩.com

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part)); //%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com