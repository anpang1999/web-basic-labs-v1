function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("main 함수 실행");
  await delay(1000);
  console.log("1초 후 출력"); // 비동기 작업으로 작업 완료 후 출력
}

main();
console.log("코드 실행");
