import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks-grid',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './tasks-grid.component.html',
  styleUrl: './tasks-grid.component.scss'
})
export class TasksGridComponent implements OnInit {
  service: TaskService;
  tasks: Task[];

  ngOnInit() {
    this.service
      .getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  deleteTask(task: Task) {
    this.service
    .getTasks()
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  constructor(service: TaskService) {
    this.service = service;
  }
}
