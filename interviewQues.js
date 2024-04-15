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
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

// const nums = [2, 4, 6, 8];
const multiThree = nums.myMapArray((num, i, arr) => {
  return num * 3;
});

console.log(multiThree);

// Pollyfill for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numsFilter = [1, 2, 3, 4];
const moreThanTwo = numsFilter.myFilter((num) => num > 2);

console.log(moreThanTwo);

// Pollyfill for reduce
