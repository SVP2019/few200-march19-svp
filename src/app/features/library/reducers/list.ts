// import { Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';
import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';

export interface BookEntity {
  id: string;
  author: string;
  title: string;
  format: string;
  loaned: boolean;
}
export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();



const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', author: 'Lois Lowry', title: 'Number the Stars', format: 'Paperback', loaned: false },
    2: { id: '2', author: 'Sean Manseau', title: 'By the Numbers', format: 'Hardcover', loaned: true },
    3: { id: '3', author: 'Howard Stern', title: 'Howard Stern Comes Again', format: 'E-Book', loaned: false }
  }
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ITEM_ADDED: {
      return adapter.addOne(action.payload, state);
    }
    case actions.ITEM_LOANED: {
      const update = Object.assign({}, action.payload, {
        changes: {
          loaned: true
        }
      });
      return adapter.updateOne(update, state);
    }
    case actions.ITEM_RETURNED: {
      const update = Object.assign({}, action.payload, {
        changes: {
          loaned: false
        }
      });
      return adapter.updateOne(update, state);
    }
    default: {
      return state;
    }
  }
}
