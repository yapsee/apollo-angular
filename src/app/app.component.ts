import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "TODO";
  taskTitle = "";
  taskStatus = "";
  tasks = [
    { title: "Task 1", id: 9, status: "In Progress"},
    { title: "Task 2", id: 27, status: "To Do" },
    { title: "Task 3", id: 48, status: "In Progress" },
    { title: "Task 4", id: 33, status: "Done" },
    { title: "Task 5", id: 42, status: "To Do" }
  ];
  statusSelected = null;

  deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  addTask() {
    const lastIndex = this.tasks.length - 1;
    const id = this.tasks[lastIndex].id + 1;
    this.tasks.push({ title: this.taskTitle,  id, status: this.taskStatus });
    this.taskTitle = "";
  }

  filterTask() {
    if(this.statusSelected === null) {
      return this.tasks;
    }
    return this.tasks.filter((task) => this.statusSelected === task.status);
  }
}
