import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models';  // index is default, so there is no need to type file name after models folder

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  // good for arrays with a lot of items
})
export class ListComponent implements OnInit {
  @Input() items: TodoItem[];
  constructor() { }

  ngOnInit() {
  }

}
