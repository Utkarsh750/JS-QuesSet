// Palindrom Number

const palindrom = (x) => {
  return x > 0 ? false : x === +x.toString().split("").reverse().join("");
};

const result = palindrom(98);
// console.log(result);

// Finbonacci Series

const fib = (n) => {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr[n]);
};

// fib(7);

// SUM OF DIGITS OF NUMBER
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumOfDigits(1234));

// COUNT THE NUMBER OF DIGITS
function countDigits(num) {
  let count = 0;

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

// console.log(countDigits(23587873));

const arr = [1, 2, 3, 4, "Utkarsh", 6, { hello: "hello" }];
arr.pop();
arr.push({ Lname: "Sharma" });
arr.pop();
// console.log(arr);
// arr.sort();
arr.sort((a, b) => b - a);
console.log(arr);
