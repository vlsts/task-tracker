import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task';
import { TasksListFilterComponent } from '../tasks-list-filter/tasks-list-filter.component';
import { TaskStatus } from '../TaskStatus';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TasksListFilterComponent, MatCardModule, MatButtonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  constructor(service: TaskService, private dialog: MatDialog, private router: Router) {
    this.service = service;
  }
  
  filteredTasks: Task[];
  tasks: Task[];
  service: TaskService;
  @Output() onDeleteTask = new EventEmitter();

  ngOnInit(): void {
    this.service
      .getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.filteredTasks = tasks.filter(task => task.status === TaskStatus.ToDo);
      });
  }

  handleSelectedStatus(status: TaskStatus) {
    this.filteredTasks = this.tasks.filter(task => task.status === status);
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
       data: task,
     });
 
     dialogRef.afterClosed().subscribe(() => {
       this.service
        .editTask(task)
        .subscribe(task => {
          console.log('Task edited successfully:', task);
          this.router.navigate(['/']);
        });
     });
   }

   deleteTask(taskId: string) {
      this.service.deleteTask(taskId).subscribe(task => {
        console.log('Task deleted successfully:', task);
        // this.router.navigateByUrl('/');
        this.onDeleteTask.emit(task)
      });
   }

}
