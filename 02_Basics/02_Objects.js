//singleton object
//const myObj = new Object();

//Object Literal
const myObj = {
  name: "Shrinivas",
  "full name": "Shrinivas Mandhare",
  age: 23,
  city: "Pune",
};
//2 Ways of Accessing Object Properties
// console.log(myObj.name);
// console.log(myObj["age"]);

//now to access full name we must use myObj["full name"]
// console.log(myObj["full name"]);

//Changing the value of Property
myObj.age = 24;

myObj.greetings = function () {
  //if we want to reference the same object we can use this
  console.log(`greetings from ${this.name}`);
};

//If we Don't want to change the values of the properties we can use
Object.freeze(myObj);
myObj.age = 23; //Value of age will not change
console.log(myObj.greetings());

//using symbol as key of the object
const mySymbol = Symbol("key1");

const myObj2 = {
  [mySymbol]: "Shrinivas",
};

//Accessing Property whose key is symbol
console.log(myObj2[mySymbol]);
