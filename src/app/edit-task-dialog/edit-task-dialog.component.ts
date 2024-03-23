import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Task } from '../task';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EditDialogData } from './dialog-data';
import { MatInputModule } from '@angular/material/input';
import { TaskStatus } from '../task-status';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.scss'
})
export class EditTaskDialogComponent {
  statuses: TaskStatus[] = Object.values(TaskStatus);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EditDialogData,
  ) {}

  edit(title: string, description: string, status: TaskStatus) { 
    this.data.task.title = title;
    this.data.task.description = description;
    this.data.task.status = status

    this.data.editEvent.emit(this.data.task);

   }
}
