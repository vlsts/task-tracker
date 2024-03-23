import { Component, EventEmitter, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Task } from '../task';
import { TaskStatus } from '../task-status';

@Component({
  selector: 'app-add-task-dialog',
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
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  constructor (
    @Inject(MAT_DIALOG_DATA) public addTaskEvent: EventEmitter<Task>,
  ) {}

  statuses: TaskStatus[] = Object.values(TaskStatus);

  addTask(id: string, title: string, description: string, status: TaskStatus) {
    this.addTaskEvent.emit({id, title, description, status});
  }
}
