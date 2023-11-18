//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const scores = [1, 2, 3, 4, 5];
//Another Way of Declaring an Array
const number = new Array(1, 2, 3, 4, 5);

//Array methods
scores.push(6);
scores.pop();

scores.unshift(10);
//unshift method add the element at the beginning of the array due to this it shifts all the other
//elements in the array.DO NOT USE THIS METHOD if you are large array.

scores.shift();

scores.includes(9);
scores.indexOf(100);

const newArray = scores.join();
console.log(newArray);
console.log(scores);

//slice and splice
console.log("Original Array", scores);
console.log(scores.slice(1, 3));

console.log(scores.splice(1, 3));

const marvelHeroes = ["IronMan", "thor"];
const dcHeroes = ["Batman", "Superman"];

console.log(marvelHeroes.concat(dcHeroes));
// console.log(marvelHeroes.push(dcHeroes));
console.log([...marvelHeroes, ...dcHeroes]);

const nestedArray = [10, 20, [30, 40, 50, [60, 70, 80, 90]]];
console.log(nestedArray.flat(Infinity));

//Checking if the input is an array

console.log(Array.isArray("Shrinivas"));
//Creates an array from an iterable object.
console.log(Array.from("Shrinivas"));
console.log(Array.from({ name: "Shrinivas" })); //Interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));
