import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  showStatus: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) { }

  toggleAddTask() {
    this.uiService.changeShowStatus();

  }

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe(
      (val) => {
        this.showStatus = val;
        console.log(val);

      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
