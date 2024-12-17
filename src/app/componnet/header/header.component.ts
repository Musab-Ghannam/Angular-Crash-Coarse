import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  title : string = 'Task Tracker';
}
