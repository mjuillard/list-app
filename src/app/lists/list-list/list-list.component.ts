import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/lists/list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit {

  lists: List[];

  constructor(private listService: ListService,
    private router: Router,
    private route: ActivatedRoute) {
      this.lists = this.listService.getLists();
    }

  ngOnInit() {

  }

}
