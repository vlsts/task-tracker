import { Component, OnInit } from '@angular/core';
import { TasksGridComponent } from '../tasks-grid/tasks-grid.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../notification.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [
    TasksGridComponent,
    TasksListComponent,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent implements OnInit {
  constructor(private notificationService: NotificationService) {
  }
  isList: boolean = false;
  notificationMessage: string;

  ngOnInit() {
    this.notificationService.notificationSubject
      .subscribe(hasNotifications => 
        this.notificationMessage = hasNotifications ?
                                  "New notifications, please refresh the page" : "");
  }
}
