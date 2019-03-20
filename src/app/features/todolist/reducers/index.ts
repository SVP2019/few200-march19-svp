import * as fromList from './list';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoItem } from '../models';

const featureName = 'todosFeature';
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
const { selectAll: selectTodoEntities } = fromList.adapter.getSelectors(selectList); // object destructuring

// 4. Selectors for the components
// TodoItem[]
export const selectTodoItems = createSelector(selectTodoEntities, e => e as TodoItem[]);
