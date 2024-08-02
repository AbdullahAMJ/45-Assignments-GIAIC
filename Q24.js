// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let str1 = "hello";
let str2 = "world";
console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');
console.log("Is str1 != 'hello'? I predict False.");
console.log(str1 != 'hello');
console.log("Is str2 == 'world'? I predict True.");
console.log(str2 == 'world');
console.log("Is str2 != 'world'? I predict False.");
console.log(str2 != 'world');
console.log("Is str1.toLowerCase() == 'hello'? I predict True.");
console.log(str1.toLowerCase() == 'hello');
console.log("Is str2.toLowerCase() != 'WORLD'? I predict True.");
console.log(str2.toLowerCase() != 'WORLD');
let num1 = 10;
let num2 = 20;
console.log("Is num1 == 10? I predict True.");
console.log(num1 == 10);
console.log("Is num1 != 10? I predict False.");
console.log(num1 != 10);
console.log("Is num2 > num1? I predict True.");
console.log(num2 > num1);
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 >= 10? I predict True.");
console.log(num1 >= 10);
console.log("Is num2 <= 15? I predict False.");
console.log(num2 <= 15);
console.log("Is num1 < num2 and num2 > 15? I predict True.");
console.log(num1 < num2 && num2 > 15);
console.log("Is num1 < num2 and num2 < 15? I predict False.");
console.log(num1 < num2 && num2 < 15);
console.log("Is num1 < num2 or num2 < 15? I predict True.");
console.log(num1 < num2 || num2 < 15);
console.log("Is num1 > num2 or num2 < 15? I predict False.");
console.log(num1 > num2 || num2 < 15);
let arr = [1, 2, 3, 4, 5];
console.log("Is 3 in the array? I predict True.");
console.log(arr.includes(3));
console.log("Is 6 in the array? I predict False.");
console.log(arr.includes(6));
console.log("Is 3 not in the array? I predict False.");
console.log(!arr.includes(3));
console.log("Is 6 not in the array? I predict True.");
console.log(!arr.includes(6));
export {};
