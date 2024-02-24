// ques - 1
const incrementNumbers = (numbers) => {
  return numbers.map((num) => num + 3);
};
// const numbers = [1, 2, 3, 4, 5];

// console.log(incrementNumbers(numbers));

// ques - 2
const capitalizeArray = (myArray) => {
  return myArray.map((ele) => ele.toUpperCase());
};
const myArray = ["apple", "banana", "cherry"];
// console.log(capitalizeArray(myArray));

// // ques - 3
// const getAges = (people) => {
//   return people.map((data) => data.age);
// };
// const peoples = [
//   { name: "Ankit", age: 25 },
//   { name: "Vinit", age: 24 },
//   { name: "Shashi", age: 29 },
// ];
// const ages = getAges(people);
// // console.log(ages);

// ques - 4
const getProductNamesInLowerCase = (products) => {
  return products.map((product) => product.name.toLowerCase());
};
const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
// console.log(getProductNamesInLowerCase(products));

// ques - 5
const getCityNames = (cities) => {
  return cities.map((city) => city.name);
};
const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

// console.log(getCityNames(cities));

// ques - 6
const filterLongStrings = (fruits) => {
  return fruits.filter((fruit) => fruit.length > 5);
};
const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
// console.log(filterLongStrings(fruits));

// ques 7
const isDivisibleBy3and5 = (numbers) => {
  return numbers.filter((num) => num % 3 == 0 && num % 5 == 0);
};
const numbers = [1, 2, 30, 4, 15];
// console.log(isDivisibleBy3and5(numbers));

// ques - 8
const filterByAge = (people) => {
  return people.filter((peoples) => peoples.age > 30);
};
const people = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

// console.log(filterByAge(people));

// ques - 9
const filterByScore = () => {
  return students.filter((stu) => stu.score > 80);
};
const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

// console.log(filterByScore(students));

// ques - 10
const filterByCityAndAge = (studentData) => {
  return studentData.filter((stu) => stu.city === "Indore" && stu.age > 70);
};
const studentData = [
  { name: "Vaishnavi", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredPeople = filterByCityAndAge(studentData);
// console.log(filteredPeople);

// ques - 11
const filterByGenre = (books) => {
  return books.filter((book) => book.genre === "Science Fiction");
};
const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  { title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];

const filteredBooks = filterByGenre(books, "Science Fiction");
// console.log(filteredBooks);

// ques - 12
const filterBySalary = (employees) => {
  return employees.filter(
    (employee) => employee.salary > 22000 && employee.age > 25
  );
};
const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
