// const userData = {
//   firstName: "Utkarsh",
//   lastName: "Sharma",
//   age: 25,
//   printData: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// userData.printData();

// var a = 1;
// var b = 2;

// var y = 1000;
// console.log(y);

// function sumA(a) {
//   return function sumB(b) {
//     return function sumC(c) {
//       console.log(a, b, c);

//       return a + b + c;
//     };
//   };
// }

// sumA(2)(3)(4);

// Polyfill for map()
Array.prototype.myMapArray = function (cb) {
  let temp = []; // to create new array we require a empty array so we took this

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]));
  }

  return temp;
};

const nums = [2, 4, 6, 8];
const multiThree = nums.myMapArray((num) => {
  return num * 3;
});

// console.log(multiThree);

// Pollyfill for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numsFilter = [1, 2, 3, 4, 6, 5, 35];
const moreThanTwo = numsFilter.myFilter((num) => num >= 2);

console.log(moreThanTwo);

// Pollyfill for forEach

const num = [1, 2, 3, 4, 5];

// num.forEach((el) => console.log(el));

function printElementOfForEach(el) {
  console.log(el);
}
Array.prototype.myForEach = function (cb) {
  for (let index = 0; index < this.length; index++) {
    cb(this[index]);
  }
};

// num.myForEach(printElementOfForEach)

// POLLYFILL FOR PROMISE.ALL

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 5000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2");
  }, 100);
});

Promise.all([promise1, promise2]).then(console.log).catch(console.log);
