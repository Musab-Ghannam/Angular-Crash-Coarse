import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, CommonModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {

    this.taskService
      .getTasks()
      .subscribe((tasks) => this.tasks = tasks);

  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(

      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    console.log(task);
    this.taskService.toggleTask(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(
      () => this.tasks.push(task)
    )
  }
}
