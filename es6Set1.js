// console.log("hello");
// Ques-1
const person = {
    name: "Utkarsh",
    age: 30,
  };
  // console.log((person.age = 35));
  
  // Ques-2
  const car1 = { make: "Porsche", model: "911", horsepower: 450 };
  const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
  const isSportsCar = (car) => {
    if (car.horsepower >= 300) {
      return true;
    }
  };
  // console.log(isSportsCar(car2));
  
  // Ques - 3
  const person1 = { name: "Ajay", age: 20 };
  const isEligible = (person, num) => {
    return person.age + num > 21;
  };
  // console.log(isEligible(person1, 1));
  
  // Ques-4
  const blog1 = {
    title: "How to Learn JavaScript",
    author: "John Doe",
    views: 1430,
  };
  const blog2 = {
    title: "10 Reasons to Start a Blog",
    author: "Jane Smith",
    views: 500,
  };
  const getViews = (blog) => {
    return blog.views > 1000;
  };
  // console.log(getViews(blog2));
  
  // Ques-5
  let a = 1;
  let b = 2;
  
  [a, b] = [b, a];
  // console.log(a);
  // console.log(b);
  
  // Ques-6
  const add = (a, b) => {
    return a + b;
  };
  // console.log(add(2, 3));
  
  // ques - 7
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
  const combinedObj = combineObjects(obj1, obj2);
  
  // console.log(combinedObj);
  
  // Ques - 9
  const stringToUpperCase = (inputString) => {
    return inputString.toUpperCase();
  };
  // console.log(stringToUpperCase("hello"));
  const concatenateStrings = (str1, str2) => {
    return str1 + str2;
  };
  // console.log(concatenateStrings("hello", "world"));
  // Ques - 11
  const lastElement = (arr) => {
    return arr[3];
  };
  // console.log(lastElement([1, 2, 3, 4, 5, 6]));
  
  const sumFirstElement = (arr, num) => {
    return arr[0] + num;
  };
  // console.log(sumFirstElement([1, 2, 3], 5)); // 6
  
  // Ques - 15
  const personInfo = ({ name, age }) => {
    return `${name} is ${age} years old.`;
  };
  
  // const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
  // const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };
  
  // console.log(personInfo(person1)); // Expected output: "John is 25 years old."
  