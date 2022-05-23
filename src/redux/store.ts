// @ts-ignore
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { userReducer } from 'redux/userReducer';

const rootReducer = combineReducers({
  userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof store.getState>;
