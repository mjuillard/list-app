
import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks : Task[] = [ {id:0, title: 'Ma prems task', content: "To do"},
  {id:1, title:'celle la il faut la faire!', content: "To do"}];


  constructor() { }

  getTasks() {
    return this.tasks.slice(); // Get a copy to avoid change directly on the private recipes list
  }

  getTask(index: number){
    return this.tasks.slice()[index];
  }

  getTasksFromList(listId: number){
    return this.tasks.slice()[listId];
  }

}
