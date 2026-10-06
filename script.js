const taskForm = document.querySelector("#task-form");
const taskName = document.querySelector("#task-name");
const taskCategory = document.querySelector("#task-category");
const taskPriority = document.querySelector("#task-priority");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = taskName.value.trim();
    const category = taskCategory.value;
    const priority = taskPriority.value;
  console.log(name, category, priority);
});
