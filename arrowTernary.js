
// a) Arrow function isEven
const isEven = n => n % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// b) Using ternary operator
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result); // Pass

// c) Arrow function greet with ternary operator
const greet = name => `Hello, ${name ? name : "Guest"}`;
console.log(greet("Alice")); // Hello, Alice
console.log(greet());        // Hello, Guest
