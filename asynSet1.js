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

delayedLoop(3);
