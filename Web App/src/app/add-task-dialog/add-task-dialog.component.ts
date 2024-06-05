import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskStatus } from '../TaskStatus';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../task.service';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../Task';
import { NotificationService } from '../notification.service';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatSelectModule, MatInputModule, RouterLink, RouterOutlet, RouterModule, MatOptionModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  taskDescription: string = "";
  taskName: string = "";
  taskAssignedTo: string = "";
  taskStatus: TaskStatus = TaskStatus.ToDo;

  constructor(public service: TaskService, public router: Router, private notificationService: NotificationService) { }

  onSubmit() {
    this.service.addTask(
      <Task>{
        title: this.taskName,
        description: this.taskDescription,
        assignedTo: this.taskAssignedTo,
        status: this.taskStatus
      }
    ).subscribe(task => {
      this.notificationService.sendMessage("BroadcastMessage", [task])
      //this.resetForm();
      this.router.navigate(['/']);
    });

  }
  validForm(): boolean {
    return this.taskName.length !== 0 &&
      this.taskDescription.length !== 0 &&
      this.taskAssignedTo.length !== 0 &&
      this.taskStatus.length !== 0;
  }
}
