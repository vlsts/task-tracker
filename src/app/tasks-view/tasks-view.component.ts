import { Component, EventEmitter, Inject, type OnInit } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import type { Task } from '../task';
import { TaskStatus } from '../task-status';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [
    TaskGridComponent,
    TaskListComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent {
  isList = false;
  statuses: TaskStatus[] = Object.values(TaskStatus);
  onEditTask: EventEmitter<Task> = new EventEmitter<Task>();
  tasks: Task[] = [
    {
      id: "3",
      title: "3",
      description: "3",
      status: TaskStatus.ToDo
    },
    {
      id: "1",
      title: "1",
      description: "1",
      status: TaskStatus.InProgress
    },
    {
      id: "2",
      title: "2",
      description: "2",
      status: TaskStatus.Done
    },
    {
      id: "4",
      title: "4",
      description: "4",
      status: TaskStatus.Done
    },
    {
      id: "5",
      title: "5",
      description: "5",
      status: TaskStatus.Done
    },
    {
      id: "6",
      title: "6",
      description: "6",
      status: TaskStatus.Done
    }];;

  constructor(@Inject(MatDialog) public dialog) {}

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => task.id !== t.id);
  }

  addTask() {
    this.dialog.open(AddTaskDialogComponent, { data: this.tasks });
  }

  editTask(task: Task) {
		this.dialog.open(EditTaskDialogComponent, { data: task });
	}
}