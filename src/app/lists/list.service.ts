import { Injectable } from '@angular/core';
import { List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private lists: List[] = [ {id:0, title: 'Liste principale'}, {id:1, title:'Courses'}];

  constructor() { }

  getLists() {
    return this.lists.slice(); // Get a copy to avoid change directly on the private recipes list
  }

  getList(index: number){
    return this.lists.slice()[index];
  }

}
