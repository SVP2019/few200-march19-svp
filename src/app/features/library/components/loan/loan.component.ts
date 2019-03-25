import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ReturnedBookItem } from '../../actions/list.actions';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  @Input() items: BookItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  onreturnClicked(item: BookItem) {

    this.store.dispatch(new ReturnedBookItem(item));

  }
}
