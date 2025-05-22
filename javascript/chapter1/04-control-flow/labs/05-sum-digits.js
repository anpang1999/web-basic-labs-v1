// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.

let input = prompt("숫자를 입력하세요:");
let num = parseInt(input); // 문자열을 숫자로 변환
let sum = 0;

while (num > 0) {
  sum += num % 10; // 마지막 자릿수를 더함
  num = Math.floor(num / 10); // 마지막 자릿수를 제거
}

alert("각 자릿수의 합은: " + sum);
