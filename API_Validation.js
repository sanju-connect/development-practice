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

const tasks = [
  { id: 1, title: "JavaScript", completed: true },
  { id: 2, title: "HTML", completed: false },
  { id: "three", title: "CSS", completed: true },
  { id: 4, title: "Python", completed: false }
];

console.log(tasks.filter((task) => task.completed === true));
console.log(tasks.map((task) => task.title));
console.log(tasks.every((task) => typeof task.id === "number"));


