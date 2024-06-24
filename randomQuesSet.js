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

console.log("this");

setTimeout(() => {
  console.log("is");
  console.log("asynchronous");
}, 2000);

