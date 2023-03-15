//async

function hello() {
  return 'hello';
}

async function helloAsync() {
  return 'hello Async';
}

// console.log(hello());
// console.log(helloAsync());

helloAsync().then((res) => {
  console.log(res);
});



//await 활용
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync2() {
  await delay(3000);
  return "hello Async";
}

async function main() {
  const res = await helloAsync2();
  console.log(res);
}

main();











