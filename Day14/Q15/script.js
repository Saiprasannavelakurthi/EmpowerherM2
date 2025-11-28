let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create Complete button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Append buttons to list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});
