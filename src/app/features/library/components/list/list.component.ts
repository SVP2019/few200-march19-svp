import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookItem } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoanedBookItem } from '../../actions/list.actions';
import { Update } from '@ngrx/entity';
import { BookEntity } from '../../reducers/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: BookItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  onloanClicked(item: BookItem) {

    this.store.dispatch(new LoanedBookItem(item));

  }
}
