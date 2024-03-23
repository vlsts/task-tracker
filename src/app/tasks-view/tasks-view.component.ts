import { Component, EventEmitter, Inject, type OnInit } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import type { Task } from '../task';
import { TaskStatus } from '../task-status';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [
    TaskGridComponent,
    TaskCardComponent,
    TaskListComponent,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent implements OnInit {
  isList = false;
  statuses: TaskStatus[] = Object.values(TaskStatus);
  addTaskEvent: EventEmitter<Task> = new EventEmitter();
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
  }];

  constructor(@Inject(MatDialog) public dialog) {
    this.addTaskEvent.subscribe(t => this.tasks.push(t));
  }

  ngOnInit = () => void {
    
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => JSON.stringify(task) !== JSON.stringify(t));
  }

  changeTaskPriority(task: Task, taskStatus: TaskStatus) {
    this.tasks.forEach(t => {
      if (t === task) t.status = taskStatus;
    });
  }

  editTask(task: Task) {
    this.tasks.forEach(t => {
      if (t.id === task.id) t = task;
    })
  }

  computeTaskPercentage(taskStatus: TaskStatus): number {
    const taskCountStatus: number = this.tasks.filter(t => t.status === taskStatus).length;
    return (taskCountStatus / this.tasks.length)*100; 
  }

  addTask() {
    const dialog = this.dialog.open(AddTaskDialogComponent, {
      data: this.addTaskEvent
    });
  }
}