const peoples = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

const isRepresentPeople = (people) => {
  return peoples.map((people) => people.name);
};
console.log(isRepresentPeople(peoples));

// ques - 2
const numbers = [1, 2, 3, 4];
const multiplyByFive = (numbers) => {
  return numbers.map((number) => number * 5);
};
console.log(multiplyByFive(numbers));

// ques - 3
const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];
const greetEmployeeMessages = (employeeData) => {
  return employeeData.map(
    (employee) =>
      `Hi ${employee.name} we are glad to have you as a ${employee.dept}', 'Hi ${employee.name} we are glad to have you as a ${employee.dept}', 'Hi ${employee.name} we are glad to have you as a ${employee.dept}`
  );
};
console.log(greetEmployeeMessages(employeeData));

// ques - 4
const getBookTitles = (books) => {
  return books.map((book) => book.title);
};
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

console.log(getBookTitles(books));

// ques - 5
const isNameStartWith_A = (studentName) => {
  return studentName.filter((name) => name[0] === "A");
};
const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
console.log(isNameStartWith_A(studentName));

// ques - 6
const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
const getProducts = (productData) => {
  return productData.filter((product) => product.price > 40);
};

console.log(getProducts(productData));

// ques - 7
const numData = [1, 2, 3, 21, 14, 7];
const isDivisibleBy7 = (numData) => {
  return numData.find((num) => num % 7 === 0);
};
// console.log(isDivisibleBy7(numData));

// ques - 8
const names = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
  "shayam",
];

const isNamesGreaterThan8 = (names) => {
  return names.find((name) => name.length > 8);
};
console.log(isNamesGreaterThan8(names));

// ques - 9
const productsData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];

const getProduct = (productData) => {
  return productData.filter((product) => product.price > 40);
};
console.log(getProduct(productData));

// ques - 9
const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];
const findStudentWithGradeA = (students) => {
  return students.find((num) => num.grade === "A");
};
console.log(findStudentWithGradeA(students));

// ques - 10
const student = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];
const findStudent = (student) => {
  return student.find((stu) => stu.grade === "A" && stu.scholarship === true);
};
console.log(findStudent(student));

// ques - 11
const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];
const getBestOldBollywoodMovies = (bollywoodMovies) => {
  return bollywoodMovies.filter((data) => data.rating > 8.0);
};
console.log(getBestOldBollywoodMovies(bollywoodMovies));


