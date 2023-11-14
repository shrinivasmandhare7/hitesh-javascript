//comparing same data type
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log(2 == 1);

//comparing different data types
console.log("2" > 1); //true

//Note DO Not Compare Different Data Types(this rule is used in TypeScript)


console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
// The behavior you're observing is due to how JavaScript handles comparisons involving the `null` value.
//It's important to understand that these comparisons are based on type coercion rules in JavaScript.
// 1. `null > 0`: This comparison evaluates to`false`.The reason is that when comparing values of different
//types, JavaScript performs type coercion.In this case, `null` gets coerced to `0` during the comparison.
//So, effectively, you are comparing`0 > 0`, which is`false`.
// 2. `null == 0`: This comparison also evaluates to`false`.Again, type coercion is happening here.
//The equality operator(`==`) performs type coercion, and when comparing `null` with a numeric value, it gets
//coerced to`0`.However, the strict equality operator(`===`) would result in `false` because it does not perform
//type coercion.
// 3. `null >= 0`: This comparison evaluates to`true`.As mentioned earlier, during comparisons, `null` gets
// coerced to`0`.So, you are effectively comparing`0 >= 0`, which is`true`.
// It's important to note that the behavior of these comparisons can be confusing, and it's generally
// recommended to use strict equality(`===` and`!==`) to avoid unexpected results due to type coercion.
// Strict equality does not perform type coercion and checks both value and type.

//CONFUSION IN THIS TOPIC NEED MORE RESEARCH AND STUDY.