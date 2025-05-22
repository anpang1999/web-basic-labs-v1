// 문제: prompt() 메서드를 활용해 사용자에게 숫자를 입력받아 홀수/짝수를 출력하세요.

// alert("새싹 안녕");
// prompt("이름이 뭐에요?");

let input = prompt("숫자를 입력하세요.");
if (input % 2 == 0) {
  alert("짝수입니다.");
} else if (input % 2 == 1) {
  alert("홀수입니다.");
}
