let input = prompt("비밀번호를 입력하세요:");
let isStrong = true;
let messages = [];

if (input.length < 8) {
  messages.push("길이 8자 이상이어야 합니다.");
  isStrong = false;
}

if (!/[A-Z]/.test(input)) {
  messages.push("대문자 1개 이상 포함해야 합니다.");
  isStrong = false;
}

if (!/[0-9]/.test(input)) {
  messages.push("숫자 1개 이상 포함해야 합니다.");
  isStrong = false;
}

if (!/[!@#$%^&*]/.test(input)) {
  messages.push("특수문자 1개 이상 포함해야 합니다. (!@#$%^&*)");
  isStrong = false;
}

if (isStrong) {
  alert("강한 비밀번호입니다.");
} else {
  alert("다음 조건이 부족합니다:\n" + messages.join("\n"));
}
