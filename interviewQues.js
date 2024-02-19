const userData = {
  firstName: "Utkarsh",
  lastName: "Sharma",
  age: 25,
  printData: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

userData.printData();
