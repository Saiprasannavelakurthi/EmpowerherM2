// Step 1: Define the timer function
function timer(duration, onComplete) {
    setTimeout(() => {
        // Step 2: Call the callback with the finish message
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

// Step 3: Example usage
timer(2000, function(message) {
    console.log(message);
});
