import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/list';
import { Update } from '@ngrx/entity';

let tempID = 999;
export const ITEM_ADDED = '[booklost] Item Added';
export const ITEM_LOANED = '[booklost] Item Loaned';
export const ITEM_RETURNED = '[booklost] Item Returned';
export class AddedBookItem implements Action {
  readonly type = ITEM_ADDED;
  payload: BookEntity;
  constructor(author: string, title: string, format: string, loaned: boolean) {
    this.payload = {
      id: 'T' + (tempID++),
      author,
      title,
      format,
      loaned
    };
  }
}
export class LoanedBookItem implements Action {
  readonly type = ITEM_LOANED;

  constructor(public payload: BookEntity) {

  }
}

export class ReturnedBookItem implements Action {
  readonly type = ITEM_RETURNED;

  constructor(public payload: BookEntity) {

  }
}

export type All = AddedBookItem | LoanedBookItem | ReturnedBookItem;
