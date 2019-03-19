import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    // doing it this way has cost S2 TONS of refactoring time
    this.count$ = this.store.select(s => s.counter.count);
  }

  increment() {
    // this.count = this.count + 1;
    this.store.dispatch({ type: 'Increment' });
  }
  decrement() {
    // this.count = this.count - 1;
    this.store.dispatch({ type: 'Decrement' });
  }
  resetCount() {
    this.store.dispatch({ type: 'Reset' });
  }
}
