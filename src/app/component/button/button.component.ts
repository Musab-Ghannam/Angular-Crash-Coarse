import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  showAddTask: boolean;
  constructor(private uiService: UiService) {

  }
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

  ngOnInit(): void {
    this.uiService.onToggle().subscribe(
      (val) => this.showAddTask = val
    )
  }
  
}

