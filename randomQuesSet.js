const obj = {
  name: "Utkarsh",
  lastName: "Sharma",
  age: 21,

  printName: function () {
    // console.log(this.age)
    return this.name;
  },
};

// console.log(obj.printName())
// obj.printName()

function func() {
  console.log("nimesh");

  function func2() {
    console.log("nimesh 2");
  }

  func2();
}

// func();

function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

// console.log(add(2)(3)(4)(5))

function Name() {
  let a = 1;
  console.log("This is Outer Scope variable", a);

  function Name1() {
    let a = 3;
    console.log(console.log("This is Outer Scope variable", a));
  }

  Name1();
}
// Name();

var map1 = new Map([
  [1, "one"],
  ["whole number", [0, 1, 2, 3, 4]],
  ["fName", "Utkarsh"],
]);
// console.log(map1.get("whole number"));
// console.log(map1);

// var key = map1.keys();
// for (var key of map1) {
//   console.log(key);
// }

const thisObj = {
  name: "Utkarsh",
  lname: "sharma",
  age: 21,

  func: function () {
    console.log(thisObj.age);
  },
};

// thisObj.func();


// setTimeout(() => {
//   console.log("is");
//   console.log("asynchronous");
// }, 2000);

// const myPromise = new Promise((resolve, reject) => {
//   const success = false; // Change to false to see the rejection case
//   if (success) {
//     resolve("Promise fulfilled!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message); // Output: Promise fulfilled!
//   })
//   .catch((error) => {
//     console.error(error); // This will not run since the promise is resolved
//   });

  // asyn/await ques
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log("Before wait");
    await wait(2000); // Wait for 2 seconds
    console.log("After wait");
  }
  
  // asyncFunction();
  // Output:
  // Before wait
  // (Waits for 2 seconds)
  // After wait

  function higherOrderFunction(callback) {
    callback();
}

higherOrderFunction(() => console.log('Hello from callback!'));
