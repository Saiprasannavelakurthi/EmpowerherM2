
// a) Scoping with let/var
if (true) {
  let x = 10;   
  var y = 20;   
}
console.log(y); // 20

// b) Optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email); 
console.log(profile.user?.details?.phone); 

// c) Example where optional chaining prevents runtime error
const company = {
  name: "TechCorp",
  
};

console.log(company.address?.city);  
