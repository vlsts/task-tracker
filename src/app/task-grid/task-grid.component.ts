import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Task } from '../task';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskStatus } from '../task-status';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [TaskCardComponent, MatProgressBarModule],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
  @Input() tasks: Task[];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  statuses: TaskStatus[] = Object.values(TaskStatus);

  deleteTaskFromGrid(task: Task) {
    this.tasks = this.tasks.filter(t => JSON.stringify(task) !== JSON.stringify(t));
  }

  computeTaskPercentage(taskStatus: TaskStatus): number {
    const taskCountStatus: number = this.tasks.filter(t => t.status === taskStatus).length;
    return (taskCountStatus / this.tasks.length)*100; 
  }
  
}
