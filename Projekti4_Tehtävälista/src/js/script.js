const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalTaskCounter = document.getElementById("total-task");

// Add Task Function
function addTask() {
  const task = inputBox.value.trim();
  if (task === "") {
    alert("Sinun täytyy kirjoittaa jotain!");
    return;
  }

  // Create a new task item
  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <span class="edit-btn">\u270E</span>
    <span class="delete-btn">\u00D7</span>
  `;
  listContainer.appendChild(li);

  inputBox.value = ""; // Clear input field
  updateTaskCounter();
  saveData();
}

// Edit or Delete Task
listContainer.addEventListener("click", function (e) {
  const target = e.target;

  // Delete Task
  if (target.classList.contains("delete-btn")) {
    target.parentElement.remove();
    updateTaskCounter();
    saveData();
    return;
  }

  // Edit Task
  if (target.classList.contains("edit-btn")) {
    const li = target.parentElement;
    const currentTask = li.firstChild.textContent.trim();
    const updatedTask = prompt("Muokkaa tehtävää:", currentTask);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      li.firstChild.textContent = updatedTask + " ";
      saveData();
    }
  }
});

// Mark Task as Completed
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
});

// Add Task on Enter Key
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Clear All Tasks
function clearAll() {
  if (confirm("Haluatko varmasti poistaa kaikki tehtävät?")) {
    listContainer.innerHTML = "";
    updateTaskCounter();
    saveData();
  }
}

// Update Total Task Counter
function updateTaskCounter() {
  totalTaskCounter.textContent = listContainer.children.length;
}

// Save Data to Local Storage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load Data from Local Storage
function showTask() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    listContainer.innerHTML = savedTasks;
  }
  updateTaskCounter();
}

// Initialize
showTask();
