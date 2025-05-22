// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("최소값:", min); // 3
console.log("최대값:", max); // 42
