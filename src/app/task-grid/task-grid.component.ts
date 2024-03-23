import { Component, EventEmitter, Input } from '@angular/core';
import { Task } from '../task';
import { NgFor } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
  @Input() tasks: Task[];

  deleteTaskFromGrid(task: Task) {
    this.tasks = this.tasks.filter(t => JSON.stringify(task) != JSON.stringify(task));
  }
  
}
