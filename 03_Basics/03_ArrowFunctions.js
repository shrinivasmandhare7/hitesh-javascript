const user = {
  username: "Shrinivas",
  email: "shrinivas@gmail.com",
  welcomeMessage: function () {
    //this is used to refer current context/object
    console.log(`Welcome ${this.username} to My Website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Shree";
user.welcomeMessage();

console.log(this);
//this will print {} in node environment but if you execute this in browser it will print window object
//which is global object in browser

function chai() {
  let username = "Shrinivas";
  console.log(this.username);
}
chai();

const coffee = function () {
  let username = "Shrinivas";
  console.log(this.username);
};
coffee();

//Arrow Function
const sayHello = () => {
  let username = "Shrinivas";
  console.log(this.username);
};

//explicit return
const addOne = (num1) => {
  return num1 + 1;
};

//implicit return
const addTwo = (num1) => num1 + 2;
//we can write the above function as below
// const addTwo = (num1) => (num1 +1)
//if you want to use curly braces .you must use return

// const getUser = () => {
//   return { name: "Shrinivas", age: 23 };
// }; //returning object
const getUser = () => ({ name: "Shrinivas", age: 20 }); //returning object
console.log("User", getUser());
