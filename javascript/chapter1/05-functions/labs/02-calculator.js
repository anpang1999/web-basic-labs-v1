// // TODO: add, subtract, multiply, divide 함수 만들고 결과 출력

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// rl.question("첫 번째 숫자 입력: ", (first) => {
//   rl.question("두 번째 숫자 입력: ", (second) => {
//     rl.question("연산자 입력: ", (operator) => {
//       const a = parseInt(first);
//       const b = parseInt(second);
//       let result;

//       switch (operator) {
//         case "+":
//           result = add(a, b);
//           break;
//         case "-":
//           result = subtract(a, b);
//           break;
//         case "*":
//           result = multiply(a, b);
//           break;
//         case "/":
//           result = divide(a, b);
//           break;
//       }

//       console.log(`${a} ${operator} ${b} = ${result}`);
//       rl.close();
//     });
//   });
// });

function operate(a, b, op, callback) {
  console.log(`${a}${op}${b}= `);
  console.log(callback(a, b));
}

operate(2, 3, "+", (a, b) => a + b);
