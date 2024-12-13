

// set text area maxwigth and auto shrink
const textArea = document.querySelector(".text-editor");

textArea.addEventListener("input", (e) => {
  e.target.style.height = "auto";
  e.target.style.height = `${e.target.scrollHeight}px`;
});


// add shortkut to text field
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    addTask();
  } else if (event.key === "Enter" && event.shiftKey) {
    return;
  }
});


//add task function
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    const taskList = document.getElementById("taskList");

    const todoItem = document.createElement("div");
    todoItem.className = "task-container";

    todoItem.innerHTML = `<div class="checkbox">
        <input type="checkbox">
            </div>

        <div class="task">
            <p class="task-content">${taskValue}</p>
            <p class="timing">1d</p>
        </div>
        <img class="delete-btn" draggable="false" src="./Assets/Delete.svg" alt="Delete">`;

    taskList.appendChild(todoItem);
    taskInput.value = "";
    taskInput.style.height = "auto";

  } else {
    alert("please enter a task");
  }
}


// delete function 
taskList.addEventListener("click", function(event) {

  const target = event.target;
    if (target.classList.contains("delete-btn")) {
        const taskContainer = target.closest(".task-container");
        taskContainer.remove();
    } else if (target.type === "checkbox") {
      const taskContent = target.closest('.task-container').querySelector(".task-content");
      taskContent.classList.toggle("completed");
    }
})