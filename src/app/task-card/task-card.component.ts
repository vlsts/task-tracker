import {
	Component,
	EventEmitter,
	Input,
	type OnInit,
	Output,
  Inject,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {
	MatFormField,
	MatFormFieldModule,
	MatLabel,
} from "@angular/material/form-field";
import type { Task } from "../task";
import { MatIconModule } from "@angular/material/icon";
import { TaskGridComponent } from "../task-grid/task-grid.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { TaskStatus } from "../task-status";
import type { TaskPriorityChanger } from "../task-priority-object";
import { MatDialog,
	MatDialogModule,
  matDialogAnimations,
} from "@angular/material/dialog";
import { EditTaskDialogComponent } from "../edit-task-dialog/edit-task-dialog.component";
@Component({
	selector: "app-task-card",
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		MatFormField,
		MatLabel,
		MatIconModule,
		TaskGridComponent,
		MatFormFieldModule,
		MatChipsModule,
		MatTooltipModule,
		MatDividerModule,
		MatMenuModule,
		MatDialogModule,
	],
	templateUrl: "./task-card.component.html",
	styleUrl: "./task-card.component.scss",
})
export class TaskCardComponent implements OnInit {
	@Input() task: Task;
	@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
	@Output() onChangeTaskPriority: EventEmitter<TaskPriorityChanger> =
		new EventEmitter();
	@Output() onTaskEdit: EventEmitter<Task> = new EventEmitter();
	statuses: TaskStatus[] = Object.values(TaskStatus);

  // @Inject(MatDialog) dialog: MatDialog;
	constructor(@Inject(MatDialog) public dialog) {}

	ngOnInit(): void {
		this.onTaskEdit = new EventEmitter();
	}

	editTask(taskToEdit: Task) {
		this.dialog.open(EditTaskDialogComponent, {
			data: {
				task: taskToEdit,
				editEvent: this.onTaskEdit,
			},
		});
	}

	deleteTask(taskToDelete: Task) {
		this.onDeleteTask.emit(taskToDelete);
	}

	changeTaskPriority(taskToChange: Task, newStatus: TaskStatus) {
		this.onChangeTaskPriority.emit({
			task: taskToChange,
			newStatus: newStatus,
		});
	}
}
