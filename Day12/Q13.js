// Start repeating "Loading..." every 1 second
let loading = setInterval(() => {
  console.log("Loading...");
}, 1000);

// After 5 seconds, stop the loading and print success
setTimeout(() => {
  clearInterval(loading);
  console.log("Loaded successfully!");
}, 5000);
