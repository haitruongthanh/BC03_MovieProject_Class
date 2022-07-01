import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({ userReducer });

//setup thunk: xem thêm advange trong redux dev tool

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //setup thunk

export const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(thunk)) //setup thunk
);
