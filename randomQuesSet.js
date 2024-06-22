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
Name();
