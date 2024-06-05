import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, TasksViewComponent, MatIconModule, MatButtonModule, HttpClientModule],
  providers: [TaskService, NotificationService, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-tracker';

  constructor(private notificationService: NotificationService, private http: HttpClient) {
    this.notificationService.initWebSocket();
  }
}
