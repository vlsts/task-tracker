import { TaskStatus } from "./TaskStatus"

export interface Task {
    id: string,
    title: string,
    description: string,
    assignedTo: string,
    status: TaskStatus
}