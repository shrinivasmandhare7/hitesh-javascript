//Example 1
let mathsScore = "33";//string
let mathsScoreInNumber = Number(mathsScore);
console.log(typeof mathsScoreInNumber, mathsScoreInNumber);//number 33

//Example 2
let scienceScore = "22abc";//string
let scienceScoreInNumber = Number(scienceScore);
console.log(typeof scienceScoreInNumber, scienceScoreInNumber);//number NaN

//Example 3
let historyScore = undefined;
let historyScoreInNumber = Number(historyScore);
console.log(typeof historyScoreInNumber, historyScoreInNumber);//number NaN

//Example 4
let bioScore = null;
let bioScoreInNumber = Number(bioScore);
console.log(typeof bioScoreInNumber, bioScoreInNumber);//number 0

//Example 5
let engishScore = true;//boolean
let engishScoreInNumber = Number(engishScore)
console.log(typeof engishScoreInNumber, engishScoreInNumber);//number 1

//For Boolean

//Example 1
let numberIsLoggedIn = 1;
let booleanIsLoggedIn = Boolean(numberIsLoggedIn);
console.log(booleanIsLoggedIn);//true

//Example 2
let stringIsLoggedIn = "";
console.log(Boolean(stringIsLoggedIn));//false

console.log(Boolean("Shrinivas"));//true


//String

//Example 1
let number = 33
console.log(String(number));