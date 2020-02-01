import { expenseReducer } from './../reducers/expenses';
import { AppActions } from './../types/actions';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";


export const rootReducer = combineReducers({
  expenses: expenseReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
