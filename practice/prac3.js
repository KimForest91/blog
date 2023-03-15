function taskA(a, b, cb) {
  //console.log('A 작업 끝');
  setTimeout(() => {
    // console.log('A task end');
    const res = a + b;
    cb(res);
  }, 3000)
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000)
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000)
}

taskA(3, 4, (res) => {
  console.log('a task result : ', res);
});

taskB(7, (res) => {
  console.log('b task result : ', res);
});

console.log('코드끝');


















