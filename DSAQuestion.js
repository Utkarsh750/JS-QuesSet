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

fib(7);
