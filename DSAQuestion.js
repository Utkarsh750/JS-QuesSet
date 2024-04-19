// Palindrom Number

const palindrom = (x) => {
  return x === +x.toString().split("").reverse().join("");
};

const result = palindrom(98);
console.log(result);
