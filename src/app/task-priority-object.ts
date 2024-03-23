import type { Task } from "./task";
import type { TaskStatus } from "./task-status";

export interface TaskPriorityChanger {
    task: Task,
    newStatus: TaskStatus
};