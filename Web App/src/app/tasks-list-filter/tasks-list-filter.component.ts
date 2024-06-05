import { Component, EventEmitter, Output } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { TaskStatus } from '../TaskStatus';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list-filter',
  standalone: true,
  imports: [MatTabGroup, MatTabsModule],
  templateUrl: './tasks-list-filter.component.html',
  styleUrl: './tasks-list-filter.component.scss'
})
export class TasksListFilterComponent {
  constructor(service: TaskService) { this.service = service; }

  @Output() onSelectedStatus: EventEmitter<TaskStatus> = new EventEmitter();
  selectedStatus: TaskStatus = null;
  service: TaskService;

  selectStatus = (status: TaskStatus) => {
    this.onSelectedStatus.emit(status);
    this.selectedStatus = status;
  }

}
