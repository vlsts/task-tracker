import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../Task';
import { MatOptionModule } from '@angular/material/core';
import { TaskService } from '../task.service';
import { NgFor } from '@angular/common';
import { TaskStatus } from '../TaskStatus';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgFor,
    // MatDialogTitle,
    // MatDialogContent,
    // MatDialogActions,
    // MatDialogClose,
    MatDialogModule,
    MatOptionModule
  ],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.scss'
})
export class EditTaskDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    public service: TaskService
  ) { }
  
  save() {
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
