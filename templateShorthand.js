
// a) Template Literals
const username = "Alice";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b) Object Shorthand
const name = "Sam";
const age = 21;
const student = {
  name,   // shorthand for name: name
  age,    // shorthand for age: age
  greet() {   // shorthand for greet: function() { ... }
    console.log("Hello");
  }
};
student.greet(); // Output: Hello

// c) Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("John", "Doe")); 
