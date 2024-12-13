

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

// filter function
const tabs = document.querySelectorAll(".tab");
const taskList = document.getElementById("taskList");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function (e) {

    tabs.forEach(function (t) {
      t.classList.remove("tab-active");
    });

    // Add the 'tab-active' class to the clicked tab
    tab.classList.add("tab-active");

    const target = e.target.getAttribute("data-target");
    filterTask(target);
  })
})

function filterTask(category) {
  const tasks = taskList.querySelectorAll(".task-container");

  tasks.forEach((task) => {
    const taskContent = task.querySelector(".task-content");
    const isCompleted = taskContent.classList.contains("completed");

    if (category === "all") {
      task.style.display = "flex";
    } else if (category === "completed" && isCompleted) {
      task.style.display = "flex";
    } else if (category === "pending" && !isCompleted) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
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


// delete completed
const deleteButton = document.querySelector(".delete-completed");

deleteButton.addEventListener("click", function () {
  const tasks = document.querySelectorAll(".task-container");

  tasks.forEach((task) => {
    const taskContent = task.querySelector(".task-content");

    if (taskContent.classList.contains("completed")) {
      task.remove();
    }
  });
});