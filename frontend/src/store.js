import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";
import SigninReducer from "./screens/Signin/SigninReducer";

const reducers = combineReducers({
  signIn: SigninReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
