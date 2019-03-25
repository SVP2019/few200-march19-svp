import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { LoanComponent } from './components/loan/loan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibraryComponent, ListComponent, EntryComponent, LoanComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers),
    FormsModule
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
