const userData = {
  firstName: "Utkarsh",
  lastName: "Sharma",
  age: 25,
  printData: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

userData.printData();

var a = 1;
var b = 2;

var y = 1000;
console.log(y);

function sumA(a) {
  return function sumB(b) {
    return function sumC(c) {
      console.log(a, b, c);

      return a + b + c;
    };
  };
}

sumA(2)(3)(4);

console.log("noth");
