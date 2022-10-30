// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];


function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Logs the state of a specified task
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Marks a task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "🐱💩");
const task2 = newTask("Do Laundry", "👖");
const tasks = [task1, task2];

task1.logState(0); // Clean Cat Litter has not been completed
task1.markCompleted(0);
task1.logState(0); // Clean Cat Litter has been completed

task2.logState(0); // Laundry has not been completed
task2.markCompleted(0);
task2.logState(0); // Laundry has been completed

console.log(tasks)