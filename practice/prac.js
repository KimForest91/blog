function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log('Action :: cry');
}

function sing() {
  console.log('Action :: sing');
}

function dance() {
  console.log('Action :: dance');
}

// checkMood('sad', sing, cry);


const arr = [1, 2, 3, 4];
const newArr = [];
let number = 3;

arr.forEach(function(elm) {
  newArr.push(elm * 2);
});

//console.log(newArr);

const newArr2 = arr.map((elm) => {
  return elm * 2;
});

// console.log(newArr2);


arr.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  }
});
// 위의 식과 같음
// console.log(arr.includes(number));
// console.log(arr.indexOf(number)); // -1이 나온다면 없는 값이라는 뜻


const col = [
  {num: 1, color: 'red'},
  {num: 2, color: 'blue'},
  {num: 3, color: 'black'},
  {num: 4, color: 'purple'},
  {num: 5, color: 'green'},
  {num: 6, color: 'blue'},
];


// console.log(col.findIndex((elm) => elm.color === 'red'));

// console.log(col.filter((elm) => elm.color === "blue"));

// console.log(col.slice(0, 2));


let chars = ['나', '다', '가'];
let num = [300, 4, 20000];

const compare = (a, b) => {
  if(a > b) {

    return 1;

  } else if(a < b) {

    return -1;

  } else {

    return 0;

  }

}

chars.sort();
console.log(chars);

num.sort(compare);
console.log(num);

















