const accountId=1234;
let accountEmail="Shrinivasmandhare2000@gmail.com";
var accountPassword="Test@123";
/*
Do Not Use var .Because of the issue of Block scope and Functional Scope.
*/

accountCity="Pune";//This is aallowed but its not a good practice.

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// accountId=3212; Not Allowed
accountEmail="shrinivasmandhare7@gmail.com";
accountPassword="Pass@123";
accountCity="Bangluru";
console.table([accountId,accountEmail,accountPassword,accountCity])
