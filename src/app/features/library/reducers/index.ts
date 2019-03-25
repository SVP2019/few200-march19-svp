import * as fromList from './list';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookItem } from '../models';

const featureName = 'booksFeature';
export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

// selectors

// 1. created a feture selector
const selectFeature = createFeatureSelector<State>(featureName);

// 2. Create selector for each branch
const selectList = createSelector(selectFeature, f => f.list);

// 3. "Helpers"
const { selectAll: selectBookEntities } = fromList.adapter.getSelectors(selectList); // object destructuring
const { selectAll: selectLoanedBookEntities } = fromList.adapter.getSelectors(selectList); // object destructuring
// 4. Selectors for the components
// BookItem[]
export const selectBookItems = createSelector(selectBookEntities, e => {
  return e.filter(x => !x.loaned)
    .map(x => x as BookItem);
});
export const selectLoanedBookItems = createSelector(selectLoanedBookEntities, e => {
  return e.filter(x => x.loaned)
    .map(x => x as BookItem);
});

