import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;
  service: TaskService;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor(
    service: TaskService,
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient,
    private notificationService: NotificationService
  ) { this.service = service; }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
       data: task,
     });
 
     dialogRef.afterClosed().subscribe(() => {
        this.service
          .editTask(task)
          .subscribe(task => {
            console.log('Task edited successfully:', task);
            this.router.navigate(['/']);
          });
       
     });
   }

   deleteTask(taskId: string) {
    this.service.deleteTask(taskId).subscribe(() => {
      console.log('Task deleted successfully:');

      this.notificationService.sendMessage("Task deleted, please refresh.", [this.task]);
      this.onDeleteTask.emit(this.task);
    })
 }
 
}
