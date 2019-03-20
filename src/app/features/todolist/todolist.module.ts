import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [TodolistComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule
  ],
  exports: [TodolistComponent]
})
export class TodolistModule { }
