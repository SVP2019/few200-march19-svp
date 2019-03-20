import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as countActions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {
  // @Effect({
  //   dispatch: false
  // }) logAllActions$ = this.actions$
  //   .pipe(
  //     tap(a => console.log(a.type))
  //   );
  @Effect({ dispatch: false }) saveCountBy$ = this.actions$
    .pipe(
      ofType(countActions.COUNT_BY_SET), // Action {type: string}
      map(a => a as countActions.SetCountBy), // SetCountBy { type: string, by: number}
      map(a => a.by.toString()), // string
      tap(a => localStorage.setItem('by', a))
    );
  @Effect()
  loadCountBy$ = this.actions$
    .pipe(
      ofType(appActions.APP_START), // if it is the app start
      map(() => localStorage.getItem('by')), // go check to see if we have a count
      filter(b => b !== null), // if we do
      map(b => parseInt(b, 10)), // turn it into a number
      map(b => new countActions.SetCountBy(b)) // dispatch this into the reducer
    );
  constructor(private actions$: Actions) {
  }
}
