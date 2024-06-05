import { Injectable } from '@angular/core';
import { TaskStatus } from './TaskStatus';
import { Task } from './Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => new TaskService(http),
})
export class TaskService {

  constructor(
    public http: HttpClient
  ) { }

  statuses: TaskStatus[] = Object.values(TaskStatus);
  baseURL="http://localhost:5016"
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getTasks() {
    return this.http.get<Task[]>(`${this.baseURL}/task/`);
  }


  addTask(newTask: Task) {
    return this.http
      .post<Task>(
        `${this.baseURL}/task/`,
        newTask,
        {
          headers: this.httpOptions.headers,
          responseType: 'text' as 'json'
        }
      );
  }


  editTask(task: Task) {
    return this.http.put<Task>(`${this.baseURL}/task/${task.id}`, task);
  }
    

  deleteTask(taskId: string) {
    return this.http.delete<void>(
      `${this.baseURL}/task/${taskId}`,
      {
        headers: this.httpOptions.headers,
        responseType: 'text' as 'json'
      }
    );
  }
    
}
