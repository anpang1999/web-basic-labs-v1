// 문제 : 세 개의 숫자를 입력받아 평균을 반환하는 함수를 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(a, b, c) {
  return (a + b + c) / 3;
}

rl.question("첫번째 숫자 입력: ", (first) => {
  rl.question("두 번째 숫자 입력: ", (second) => {
    rl.question("세 번째 숫자 입력: ", (third) => {
      const a = parseInt(first);
      const b = parseInt(second);
      const c = parseInt(third);
      let result;

      result = sum(a, b, c);
      console.log(`세 값의 평균: ${result}`);
      rl.close();
    });
  });
});
