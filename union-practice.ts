type TaskStatus = "pending" | "in-progress" | "completed";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  status: TaskStatus;
  description?: string; // optional property
}

const myTask: Task = {
  id: 101,
  title: "Learn TypeScript",
  completed: false,
  status: "pending"
};

console.log(myTask);
