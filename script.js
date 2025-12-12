document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  loadTasks();
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    storedTasks.forEach((taskText) => {
      addTask(taskText, false);
    });
  }

  function addTask(taskText, save = true) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      newTask.remove();

      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = storedTasks.filter((task) => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    });
    newTask.append(removeButton);
    taskList.appendChild(newTask);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = "";
  }

  function handleInput() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please input a task");
    } else {
      addTask(taskText); // We pass the text to the function now!
      taskInput.value = "";
    }
  }
  function addTaskViaEnter(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  addButton.addEventListener("click", handleInput);
  taskInput.addEventListener("keypress", addTaskViaEnter);
});
