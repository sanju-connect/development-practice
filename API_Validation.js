function isValidTask(task) {
  return (
    task !== null &&
    typeof task === "object" &&
    !Array.isArray(task) &&
    typeof task.id === "number" &&
    typeof task.title === "string" &&
    typeof task.completed === "boolean"
  );
}

function isValidTaskList(tasks) {
  return (
    Array.isArray(tasks) &&
    tasks.every(isValidTask)
  );
}
