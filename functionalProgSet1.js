// ques - 1
const incrementNumbers = (numbers) => {
  return numbers.map((num) => num + 3);
};
const numbers = [1, 2, 3, 4, 5];

// console.log(incrementNumbers(numbers));

// ques - 2
const capitalizeArray = (myArray) => {
  return myArray.map((ele) => ele.toUpperCase());
};
const myArray = ["apple", "banana", "cherry"];
// console.log(capitalizeArray(myArray));

// ques - 3
const getAges = (people) => {
  return people.map((data) => data.age);
};
const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const ages = getAges(people);
// console.log(ages);

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

console.log(getCityNames(cities));
