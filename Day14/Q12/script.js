let list = document.querySelector("#item-list");
let button = document.querySelector("#add-btn");

button.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";

    let count = list.children.length + 1;

    if (count % 2 !== 0) {
        newItem.style.fontWeight = "bold";
        newItem.style.color = "blue";
    } else {
        newItem.style.fontStyle = "italic";
        newItem.style.color = "red";
    }

    list.appendChild(newItem);
});
