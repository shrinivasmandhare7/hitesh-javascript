console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 3);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 2);

console.log("1" + "2"); //12
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122 if the string is first operand then all operands will be treated as strings
console.log(1 + 2 + "2"); //32 if the string is last operand then all other operation will be performed first

// Nullish coalescing operator
console.log(5 ?? 10);
console.log(null ?? 10);
console.log(undefined ?? 10);
console.log(undefined ?? 10 ?? 20); //will return first non null/undefined value
