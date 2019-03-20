import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models';  // index is default, so there is no need to type file name after models folder

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: TodoItem[] = [
    { id: '99', descriprion: 'Wash Car' },
    { id: '202', descriprion: 'Call Tanya' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
