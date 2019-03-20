import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectTodoItems } from './reducers';
import { Observable } from 'rxjs';
import { TodoItem } from './models';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoList$: Observable<TodoItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.todoList$ = this.store.select(selectTodoItems);
  }

}
