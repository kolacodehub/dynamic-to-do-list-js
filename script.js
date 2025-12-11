const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText == "") {
    alert("Please input a task");
  } else {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => newTask.remove());
    newTask.append(removeButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
  }
}
function addTaskViaEnter(e) {
  if (e.key === "Enter") {
    addTask();
  }
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", addTaskViaEnter);
