"use strict";//treat all JS code as newer version

//alert(3+3) we are using node.js not a browser

//console.log('Shrinivas'); console.log('Mandhare') 
//Allowed but Avoid.Not readable because the 2 statements are on Same Line

let name = "Hitesh";
let age = 32;
let isLoggedIn = true;


/*
DataTypes
A)Primitive types
1.String =>""
2.Number =>range 2 to 2^53;
3.boolean =>true or false
4.null => Empty Value
5.undefined =>Value is Not assigned yet
6.symbol => unique
7.BigInt

B)Reference types/Non Primitive types
1.Array
2.Object
3.Function

What is the Difference Between null and undefined?
In JavaScript, `null` and `undefined` are two distinct values that indicate the absence of a meaningful value, but they are used in 
slightly different contexts:

1. **`undefined`**:
   - `undefined` typically represents a variable that has been declared but has not been assigned a value.
   - It is also the default value of function parameters that are not provided when the function is called.
   - Accessing an object property that does not exist or using an array element that has not been defined results in `undefined`.
   - It often indicates the absence of a value or an uninitialized state.

   Example:
   ```javascript
   let variable; // variable is undefined
   function greet(name) {
     console.log("Hello, " + name); // name is undefined if not provided when calling greet()
   }
   let obj = {};
   console.log(obj.propertyThatDoesNotExist); // Accessing a non-existent property results in undefined
   ```

2. **`null`**:
   - `null` represents an intentional absence of any object value or no value at all.
   - It is typically assigned to variables or properties by developers to explicitly indicate that there is no meaningful value.
   - It is often used to reset or clear a variable or object property that previously held a value.

   Example:
   ```javascript
   let emptyValue = null; // emptyValue is intentionally set to null
   let obj = { prop: null }; // Property "prop" is set to null to indicate no meaningful value
   ```

In summary, while both `null` and `undefined` are used to represent the absence of a meaningful value, `undefined` usually arises in 
situations where a value is missing or uninitialized, and `null` is explicitly used by developers to indicate no value or reset a 
variable or property. It's important to be aware of these distinctions when working with JavaScript to avoid unexpected behavior in 
your code.

*/

console.log(typeof null)
// object

console.log(typeof undefined)
// undefined

//Symbols
let id = Symbol(1);
let anotherId = Symbol(1);
console.log(id, anotherId);
console.log(id === anotherId)//false

//BigInt
const Pi = 31444444444444444444444n

//Function
//You Can Treat functions as variables in JavaScript
const myFunction = function () {
   console.log('Hello World');
}

//the return type of non primitive data types is object except return type of function i.e object function
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/