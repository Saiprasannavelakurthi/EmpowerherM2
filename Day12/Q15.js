const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for countdown time
rl.question("Enter countdown time in seconds: ", (input) => {
  let seconds = parseInt(input, 10);

  if (isNaN(seconds) || seconds < 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  // Start countdown
  let timer = setInterval(() => {
    console.log(`Remaining time: ${seconds} seconds`);
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Listen for 's' key to stop countdown
  process.stdin.setRawMode(true);
  process.stdin.on("data", (key) => {
    if (key.toString() === "s") {
      clearInterval(timer);
      console.log("Countdown stopped by user!");
      rl.close();
    }
  });
});