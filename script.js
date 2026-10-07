const taskForm = document.querySelector("#task-form");
const taskName = document.querySelector("#task-name");
const taskCategory = document.querySelector("#task-category");
const taskPriority = document.querySelector("#task-priority");
const openTaskFormButton = document.querySelector("#open-task-form");
const taskFormPanel = document.querySelector("#task-form-panel");
const taskList = document.querySelector("#task-list");
const totalCount = document.querySelector("#total-count");
const activeCount = document.querySelector("#active-count");
const completedCount = document.querySelector("#completed-count");
const filterButtons = document.querySelectorAll(".filter");
openTaskFormButton.addEventListener("click", function () {
    console.log("Add Task button clicked");

    taskFormPanel.scrollIntoView({
        behavior: "smooth"
    });
});
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = taskName.value.trim();
    const category = taskCategory.value;
    const priority = taskPriority.value;
    const taskCard = document.createElement("article");

taskCard.classList.add("task-card");
    taskCard.innerHTML = `
    <button class="task-check" aria-label="Mark task complete"></button>

    <div class="task-info">
        <h3>${name}</h3>
        <p>${category}</p>
    </div>
        <span class="priority ${priority}">
        ${priority}
    </span>
`;

taskList.append(taskCard);
    updateStats();


  console.log(name, category, priority);
});
taskList.addEventListener("click", function (event) {
if (!event.target.classList.contains("task-check")) {
    return;
}
const taskCard = event.target.closest(".task-card");

taskCard.classList.toggle("completed");
event.target.classList.toggle("checked");
    if (taskCard.classList.contains("completed")) {
    event.target.textContent = "✓";
} else {
    event.target.textContent = "";
}
    updateStats();

});

function updateStats() {
    const allTasks = taskList.querySelectorAll(".task-card");
    const completedTasks = taskList.querySelectorAll(".task-card.completed");

    const total = allTasks.length;
    const completed = completedTasks.length;
    const active = total - completed;

    totalCount.textContent = total;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}
updateStats();
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
const filter = button.textContent.trim().toLowerCase();
const tasks = taskList.querySelectorAll(".task-card");

tasks.forEach(function (task) {
const isCompleted = task.classList.contains("completed");
if (filter === "all") {
    task.style.display = "flex";
}else if (filter === "active") {
    task.style.display = isCompleted ? "none" : "flex";
}else if (filter === "completed") {
    task.style.display = isCompleted ? "flex" : "none";
}
});
    });
});
