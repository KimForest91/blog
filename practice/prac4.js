/* 
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, b, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, b, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskA(3, 4, (a_res) => {
  console.log('task A :', a_res);
  taskB(a_res, (b_res) => {
    console.log('task B :', b_res);
    taskB(b_res, (c_res) => {
      console.log('task C :', c_res);
      //콜백지옥
    });
  });
});

 */


function taskA(a, b, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });

}

function taskB(a, b, cb) {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a, b, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

/* taskA(5, 1).then((a_res) => {
  console.log('A result : ', a_res);
  taskA(a_res).then((b_res) => {
    console.log('B result : ', b_res);
    taskA(b_res).then((c_res) => {
      console.log('C result : ', c_res);
    })
  })
}) */ //얘는 콜백방식으로 사용


taskA(5, 1) 
  .then((a_res) => {
    console.log('a result: ', a_res);
    return taskB(a_res); 
  })
  .then((b_res) => {
    console.log('b result: ', b_res);
    return taskC(b_res); 
  })
  .then((c_res) => {
    console.log('c result: ', c_res); 
  });

//다른 과정 끼워넣기
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log('a result: ', a_res);
  return taskB(a_res); 
});

  console.log('중간에 끼워넣기');
  console.log('중간에 끼워넣기');
  console.log('중간에 끼워넣기');
  console.log('중간에 끼워넣기');
  console.log('중간에 끼워넣기');
  
  bPromiseResult
  .then((b_res) => {
    console.log('b result: ', b_res);
    return taskC(b_res); 
  })
  .then((c_res) => {
    console.log('c result: ', c_res); 
  });










