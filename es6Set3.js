const formatArray = (arr) => {
    const itemCount = arr.length;
    const [firstItem, , lastItem] = arr;
  
    return itemCount
      ? `The array has ${itemCount} item${itemCount !== 1 ? "s" : ""}, and the first item is "${firstItem}", and the last item is "${lastItem}".`
      : "The array is empty.";
  };
  
  const items = ["apple", "banana", "orange"];
  // const message = formatArray(items);
  // console.log(message);
  
  // Ques - 2
  const formatProduct = ({ name, price, inStock }) => {
    const stockMessage = inStock ? "is in stock" : "is in out of stock";
    return `${name} cost INR ${price} and ${stockMessage}`;
  };
  
  const product = {
    name: "Socks",
    price: 249,
    inStock: false,
  };
  
  const message = formatProduct(product);
  // console.log(message);
  
  // ques -15
  
  const printProductsDetails = ({ name, specification, price }) => {
    return `${name} has ${specification.capacity} capacity and ${specification.size} and price of ${price}`;
  };
  
  const products = {
    name: "Apple MacBook Air 2020",
    specification: {
      capacity: "256GB",
      size: "13.3 Inch",
    },
    price: 82900,
  };
  // console.log(printProductsDetails(products));
  
  // ques - 14
  const printData = ({ name, postalCode, country }) => {
    return `${name} lives in ${country}: ${postalCode}`;
  };
  const userData1 = {
    name: "Gaurav",
    postalCode: "12134",
    country: "Japan",
  };
  
  const userData2 = {
    name: "Pritam",
    postalCode: "560223",
    country: "India",
  };
  
  // console.log(printData(userData2));
  // console.log(printData(userData1));
  
  // ques - 13
  function getAddress(userData) {
    return {
      postalCode: userData.postalCode,
      city: userData.city,
    };
  }
  
  const userData = {
    name: "Jane Doy",
    postalCode: "12134",
    city: "Germany",
  };
  
  // const address = getAddress(userData);
  // console.log(address);
  
  // ques - 6
  const printFirstCharacter = (arr) => {
    return arr[0];
  };
  // console.log(printFirstCharacter([1, 2, 3, 5, 8]));
  
  // ques-7
  const printLastFive = (arr) => {
    return arr.slice(5);
  };
  console.log(printLastFive([0, 1, 1, 2, 3, 5, 8, 4]));
  
  // ques - 8
  const printSecondCharacter = (arr) => {
    return arr[1] * 20;
  };
  // console.log(printSecondCharacter([1, 2, 3, 5, 8]));
  
  // ques - 9
  const sayHello = (arr) => {
    return `Hello ${arr[1]}`;
  };
  console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
  console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));
  
  // ques - 10
  