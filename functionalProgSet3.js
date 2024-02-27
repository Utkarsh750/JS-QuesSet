// // ques - 1
// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const findToyotaCar = (cars) => {
//   return cars.find((car) => (car.make, car.year > 2010));
// };

// const toyotaCar = findToyotaCar(cars);
// console.log(toyotaCar);

// // ques - 2
// const carsData = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const getCarDetails = (carsData) => {
//   return carsData.filter((car) => car.year > 2012);
// };
// const getCars = getCarDetails(cars);
// console.log(getCars);

// // ques - 3
// const products = [
//   { name: "Toothbrush", price: 29, category: "health" },
//   { name: "Coffee Maker", price: 99, category: "home" },
//   { name: "iPad", price: 799, category: "electronics" },
//   { name: "Smartwatch", price: 199, category: "electronics" },
// ];

// const findElectronicsProduct = (products) => {
//   return products.find((product) => product.category === "electronics");
// };
// const electronicsProduct = findElectronicsProduct(products);
// console.log(electronicsProduct);

// // ques - 4
// const productsElectronic = [
//   { name: "Toothbrush", price: 29, category: "health" },
//   { name: "Coffee Maker", price: 99, category: "home" },
//   { name: "iPad", price: 799, category: "electronics" },
//   { name: "Smartwatch", price: 199, category: "electronics" },
// ];

// const getAllElectronicProducts = (productsElectronic) => {
//   return productsElectronic.filter(
//     (product) => product.category === "electronics"
//   );
// };
// const electronicProducts = getAllElectronicProducts(productsElectronic);
// console.log(electronicProducts);

// // ques - 5
const students = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];
const filterStudentsByGrade = (students, num) => {
  return students.filter((stu) => stu.grade > 85);
};
const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents);

// ques - 6
const books = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pageCount: 1178,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pageCount: 662,
  },
];

const findBookWithMoreThan500Pages = (books) => {
  return books.find((book) => book.pageCount > 500);
};
const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages);

// ques - 7
const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];
// Your code here
const getMaleCustomers = (customers) => {
  return customers.filter((male) => male.gender === "Male");
};
const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers);

// ques - 8
const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  {
    title: "Grand Theft Auto V",
    developer: "Rockstar North",
    genre: "Action",
  },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];
const filterByGenre = (games, str) => {
  return games.filter((game) => game.genre === "RPG");
};
const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);

// ques - 9
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = (cars) => {
  return cars.filter((car) => car.year > 2012);
};
const carModels = getCarModel(cars);

const getCarModelWithModel = (carModels) => {
  return carModels.map((car) => car.model);
};
console.log(carModels);
console.log(getCarModelWithModel(carModels));

// ques - 10
const novelBooks = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pageCount: 1178,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pageCount: 662,
  },
];

const getTitlesWithMoreThan700Pages = (novelBooks) => {
  return novelBooks
    .filter((book) => book.pageCount > 700)
    .map((book) => book.title);
};
const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books);
console.log(booksWithMoreThan700Pages);

// ques - 11
const numbers = [12, 23, 4, 2, 11, 21];
const sumOfEvenNumbers = (numbers) => {
  return numbers.reduce((num) => num % 2 == 0);
};
console.log(sumOfEvenNumbers(numbers));
