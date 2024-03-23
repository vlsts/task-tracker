import { Task } from "./task";
import { TaskStatus } from "./task-status";

export interface TaskPriorityChanger {
    task: Task,
    newStatus: TaskStatus
};