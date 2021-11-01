import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/lists/list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() list!: List;
  @Input() index!: number;

  constructor() { }

  ngOnInit() {
  }

}
