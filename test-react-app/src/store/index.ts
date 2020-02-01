
import { authReducer } from './auth/reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer = combineReducers({
  auth: authReducer
})

const initialState: any = {}

const middleware = [thunk]

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
