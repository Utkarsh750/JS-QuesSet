// Ques 1
const delayedGreeting = () => {
  setTimeout(() => {
    console.log("Hello, welcome to my portfolio!");
  }, 2000);
};

// delayedGreeting();

// Ques 2
const delayedAddition = (a, b) => {
  setTimeout(() => {
    console.log("sum is", a + b);
  }, 4000);
};

// delayedAddition(2,3);

// Ques 3
const delayAlert = (msg, time) => {
  setTimeout(() => {
    alert(msg);
  }, time);
};

// delayAlert("Hello World", 4000)

// Ques 4
const delayedLoop = (num) => {
  for (let i = 0; i < num; i++) {
    setTimeout(() => {
      console.log("Hello");
    }, (i + 1) * 1000);
  }
};

// delayedLoop(3);

// Ques 5
const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server: ${msg}`);
      } else {
        reject(`error from server: ${msg}`);
      }
    }, 3000); // Simulating a 3 second delay
  });
};

const fetchData = async () => {
  try {
    const response = await fakeFetch("Hello, server!", true);
    console.log("Received message:", response);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

// fetchData();

// Ques 6
const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

// Your Code here (Solution Given)
const displayOutput = document.querySelector("#output");

fakeFetch2("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent =
        "The data you are looking for, does not exist.";
    }
  });
