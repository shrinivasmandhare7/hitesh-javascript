function sayMyName() {
  //function Definition
  console.log("Shrinivas");
}

//function reference
// sayMyName

//function Execution
sayMyName();

const result = sayMyName();
console.log("result:", result); //result:undefined
//result will be undefined because function is not returning any value

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

//rest operator

function addCartTotal(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(addCartTotal(1, 2, 3, 4, 5, 6, 7));
