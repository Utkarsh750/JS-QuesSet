// function isEligibleVote(age) {
//   if (age >= 18) {
//     return "Eligible to vote";
//   } else {
//     return "Not eligible to vote";
//   }
// }
// console.log(isEligibleVote(20)); // Eligible to vote
// console.log(isEligibleVote(18)); // Eligible to vote
// console.log(isEligibleVote(17));
// const isGreater = (a, b) => {
//   if(a > b){
//     return "a is greater than b";
// }
// else{
//   return "b is greater than a";
// }
// }
// console.log(isGreater(2,5))
// console.log(isGreater(10 ,5))
// 3 Write a function that takes a number as input and determines if it is positive or negative.
// const isPositiveOrNegative = (num) => {
//   if(num > 0){
//     return "positive"
//   }
//   else{
//     return "negative"
//   }
// }
// console.log(isPositiveOrNegative(9)) // Positive Number
// console.log(isPositiveOrNegative(-8)) // Negative Number
// console.log(isPositiveOrNegative(22)) // Positive Number
//  4 odd or even
// const isEvenOdd = (num) => {
//   if( num % 2 === 0){
//     return "even"
//   }
//   else{
//     return "odd"
//   }
// }
// console.log(isEvenOdd(5))
// 5. contain A or not
// const conaintOrNot = (str) => {
//   if (str.tolowerCase().includes("a")) {
//     return "Include a";
//   } else {
//     return "not include a";
//   }
// };

// console.log(conaintOrNot("Tanay"));

// 6. longer than 5 characters

// const checkLength = (str) => {
//   if (str.length > 5) {
//     return "more than 5 characters";
//   } else {
//     return "less than 5 characters";
//   }
// };
// console.log(checkLength("Programming"));

// 7.between 1 an 10
// const isBetweenOneAndTen = (num) => {
//   if (num <= 10 && num >= 1) {
//     return true;
//   } else {
//     return false;
//   }
// };
// // console.log(isBetweenOneAndTen(5));
// console.log(isBetweenOneAndTen(11));

// 8. hello present
// const isHelloPresent = (str) => {
//   if (str.includes("hello")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// // console.log(isHelloPresent("hello world"));
// console.log(isHelloPresent("world"));

// 9. multiple of 3
// const isMultipleOfThree = (num) => {
//   if (num % 3 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isMultipleOfThree(9));

// 10. multiply by 10
// const multiplyByTen = (num) => {
//   return num * 10;
// };
// console.log(multiplyByTen(20)); // 200

// 11. object destructuring
// const product = {
//   title: "iPhone",
//   price: 5999,
//   description: "The iPhone is a smartphone developed by Apple",
// };

// const { title, description, price } = product;

// const book = {
//   title: "The Hobbit",
//   author: "J.R.R. Tolkien",
//   pages: 310,
// };

// const getBookDetails = (book) => {
//   if (book.pages > 100) {
//     return "More than 100 pages";
//   } else {
//     return "Less than 100 pages";
//   }
// };

// console.log(getBookDetails(book));
