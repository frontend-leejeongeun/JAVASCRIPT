// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  // generator function
  try {
    // try-catch
    for (let i = 0; i < 10; i++) {
      // for loop
      console.log(i); // console.log
      yield i ** 2; // yield // pause // return // next // done // value // generator
    }
  } catch (error) {
    // catch
    console.log(error); // console.log
  }
}
const multiple = multipleGenerator(); // generator // multipleGenerator
let next = multiple.next(); // next
console.log(next.value, next.done); // console.log

// multiple.return();
multiple.throw("Error!"); // throw // Error

next = multiple.next(); // next // done // value // generator
console.log(next.value, next.done); // console.log
