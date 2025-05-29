// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.

function delayMsg(ms, msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
}

delayMsg(1000, "1초 뒤 메시지").then((msg) => {
  console.log("Promise 완료! 받은 메시지:", msg);
});
