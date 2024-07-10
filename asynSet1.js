// Ques 1
const delayedGreeting = () => {
  setTimeout(() => {
    console.log("Hello, welcome to my portfolio!");
  }, 2000);
};

// delayedGreeting();

// Ques 2
const delayedAddition = (a,b) => {
    setTimeout(() => {
        console.log("sum is" , a + b)
    },4000)
}

// delayedAddition(2,3);

// Ques 3
const delayAlert = (msg, time) => {
    setTimeout(() => {
       alert(msg);
    }, time);
}

delayAlert("Hello World", 2000)