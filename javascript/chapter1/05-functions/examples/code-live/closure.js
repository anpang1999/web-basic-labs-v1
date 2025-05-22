// 클로저 : 내부 함수에서 외부 함수의 변수를 기억하는 기능
// 전역 변수로 빼서 기능 구혀하는 건 OK

let count = 0; // 누구나 다 건드림 -> 은닉x

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

counter();
