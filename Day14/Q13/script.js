// Select elements
let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let bgBtn = document.getElementById("bgBtn");
let textBtn = document.getElementById("textBtn");
let myDiv = document.getElementById("myDiv");

// Function to validate color names
function isValidColor(color) {
    let s = new Option().style;
    s.color = color;
    return s.color !== "";
}

// Event listener for background change
bgBtn.addEventListener("click", function() {
    let color = colorInput.value.trim();
    if (isValidColor(color)) {
        myDiv.style.backgroundColor = color;
    } else {
        alert("Invalid color name!");
    }
});

// Event listener for text update
textBtn.addEventListener("click", function() {
    let text = textInput.value.trim();
    if (text === "") {
        alert("Please enter some text!");
    } else {
        myDiv.textContent = text;
    }
});
