import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/lists/list.model';
import { ListService } from '../list.service';
import { Task } from 'src/app/task/task.model';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  list!: List;
  id!: number;

  constructor(private listService: ListService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.list = this.listService.getList(this.id);
        }
      );
  }


}
