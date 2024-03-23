import { EventEmitter } from "@angular/core";
import { Task } from "../task";

export interface EditDialogData {
    task: Task,
    editEvent: EventEmitter<Task>
};