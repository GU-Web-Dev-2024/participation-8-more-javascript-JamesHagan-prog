"use strict"

//function to save task to local storage
function saveTasks(tasks) {
    localStorage.set("tasks", JSON.stringify(tasks));
}

//function to load task from local storage
function loadTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

//EXPORTS
export { saveTasks, loadTasks }