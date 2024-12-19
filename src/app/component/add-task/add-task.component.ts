import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text: string;
  day: string;
  reminder: boolean = false;
  validate: string;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  addTask() {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.text = '',
      this.day = '',
      this.reminder = false

    this.onAddTask.emit(newTask);
  }
}
