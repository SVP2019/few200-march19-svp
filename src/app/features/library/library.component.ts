import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from './models';
import { Store } from '@ngrx/store';
import { State, selectBookItems, selectLoanedBookItems } from './reducers';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  bookList$: Observable<BookItem[]>;
  loanList$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.bookList$ = this.store.select(selectBookItems);
    this.loanList$ = this.store.select(selectLoanedBookItems);
  }

}
