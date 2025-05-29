// 콜백을 프로미스로 전환
// Promise: 결과를 약속하는 객체
// 함수로 묶어서 사용

function getUserData() {
  return new Promise((resolve) => {
    // Promise 객체를 return 하는 방식
    setTimeout(() => {
      // 성공 결과를 반환하는 함수
      resolve({ id: 1, name: "윤유저" });
    }, 1000);
  });
}

getUserData().then((user) => {
  // resolve() -> then() 실행
  console.log(user);
});
console.log("실행");
