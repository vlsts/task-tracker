import { Component, EventEmitter, type OnInit, Output } from '@angular/core';
import type { Task } from '../task';
import { Input } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import type { TaskStatus } from '../task-status';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FilterComponent, MatIconModule, MatButtonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  filteredTasks: Task[];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  handleSelectedStatus(status: TaskStatus) {
    this.filteredTasks = this.tasks.filter(task => task.status === status);
  }

  editTask(taskToEdit: Task) {
    console.log(taskToEdit);
  }

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
    this.filteredTasks = this.filteredTasks.filter(t => t.id !== task.id)
  }

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }
}
