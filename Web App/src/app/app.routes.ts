import { Routes } from '@angular/router';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

export const routes: Routes = [
    { path: '', component: TasksViewComponent},
    { path: 'add', component: AddTaskDialogComponent}
];
