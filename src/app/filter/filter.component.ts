import { Component, EventEmitter, type OnInit, Output } from '@angular/core';
import { TaskStatus } from '../task-status';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  statuses: TaskStatus[] = Object.values(TaskStatus);
  @Output() onSelectedStatus: EventEmitter<TaskStatus> = new EventEmitter();
  selectedStatus: TaskStatus = null;

  selectStatus = (status: TaskStatus) => {
    this.onSelectedStatus.emit(status);
    this.selectedStatus = status;
  }

  ngOnInit(): void {
    // ??????????
  }
}
