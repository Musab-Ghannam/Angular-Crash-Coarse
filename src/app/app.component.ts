import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { TasksComponent } from "./component/tasks/tasks.component";


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, TasksComponent]
})
export class AppComponent {

}
