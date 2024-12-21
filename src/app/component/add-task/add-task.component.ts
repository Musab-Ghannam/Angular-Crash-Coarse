import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  showAddTask: boolean;
  constructor(private uiservice: UiService) {}

  text: string;
  day: string;
  reminder: boolean = false;
  validate: string;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  addTask() {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    (this.text = ''), (this.day = ''), (this.reminder = false);

    this.onAddTask.emit(newTask);
  }

  ngOnInit(): void {
    this.uiservice.onToggle().subscribe((val) => {
      this.showAddTask = val;
    });
  }
}
