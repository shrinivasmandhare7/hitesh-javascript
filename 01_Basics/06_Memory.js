/*
Memory is of 2 Types 
A)Stack
B)Heap
Primitive Data Types uses Stack Memory
Non primitive Data Types uses Heap Memory
*/
//Stack Memory Example 
let firstBrand = "Apple";
let secondBrand = firstBrand;
//value in firstBrand variable will be copied to secondBrand variable
secondBrand = "Samsung";
//value in firstBrand variable will remain intact because we're changing the copy.
console.log("firstBrand", firstBrand);
console.log("secondBrand", secondBrand);

//Heap Memory Example
let activeUser = {
    email: "shrinivasmandhare2000@gmail.com",
    instagramId: "shrinivas77",
}

let inactiveUser = activeUser;
//the reference to activeUser variable will be copied to inactiveUser variable
inactiveUser.email = "shrinivasmandhare7@gmail.com";
//here we're changing the value at reference i.e Original value

console.log("activeUser", activeUser);
console.log("InActiveUser", inactiveUser);