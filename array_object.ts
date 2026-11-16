type TaskStatus = "pending" | "in-progress" | "completed";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  status: TaskStatus;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn JavaScript",
    completed: true,
    status: "completed"
  },
  {
    id: 2,
    title: "Learn TypeScript",
    completed: false,
    status: "in-progress"
  },
  {
    id: 3,
    title: "Practice React",
    completed: false,
    status: "pending"
  }
];

console.log(tasks);

function getCompletedTasks(): Task[] {
  return tasks.filter(task => task.completed);
}

function findTaskById(id: number): Task | undefined {
  return tasks.find(task => task.id === id);
}

console.log("Completed Tasks: ", getCompletedTasks());
console.log("Task with ID 2: ", findTaskById(2));
