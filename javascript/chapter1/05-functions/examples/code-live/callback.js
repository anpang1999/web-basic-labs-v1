function greet(name, callback) {
  console.log("유저가 입장했습니다...");
  callback(name);
}

function greetKorean(name) {
  console.log(`안녕하세요 ${name} 님!`);
}

greet("유저1", greetKorean);

greet("유저2", (name) => {
  console.log(`안녕하세요, ${name} 님!`);
});

// 비동기 처리에서의 콜백

//loginUser 고차함수
function loginUser(name, callback) {
  setTimeout(() => {
    console.group("로그인 완료!");
    callback(name);
  }, 2000);
}

loginUser("유저", (name) => {
  console.log(`${name}님 반갑습니다!`);
});
