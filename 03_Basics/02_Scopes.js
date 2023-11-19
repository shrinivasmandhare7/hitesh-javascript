let a = 100; //global scope
if (true) {
  let a = 10; //block scope
  const b = 20;
  var c = 30;
}

//a and b will not be accessing outside the scope but var can we accessed anywhere
//DO NOT USE var

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  let username = "Shrinivas";

  function two() {
    let email = "shrinivas@gmail.com";
    console.log(username);
  }
  //   console.log(email); //Cannot access email
  two();
}
one();

//########################################################
console.log(addOne(10));

function addOne(num) {
  return num + 1;
}

// addTwo(10); //Will throw error

const addTwo = function (num) {
  return num + 2;
};
