const taskForm = document.querySelector("#task-form");
const taskName = document.querySelector("#task-name");
const taskCategory = document.querySelector("#task-category");
const taskPriority = document.querySelector("#task-priority");
const openTaskFormButton = document.querySelector("#open-task-form");
const taskFormPanel = document.querySelector("#task-form-panel");
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
  console.log(name, category, priority);
});
