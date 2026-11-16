let taskName: string = "Learn TypeScript";

let taskId: number = 101;

let isCompleted: boolean = false;

function displayTask(taskName: string, taskId: number, isCompleted: boolean): void {
  console.log(`Task: ${taskName}`);
  console.log(`ID: ${taskId}`);
  console.log(`Completed: ${isCompleted}`);
}

displayTask(taskName, taskId, isCompleted);
