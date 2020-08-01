import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";
import SigninReducer from "./screens/Signin/SigninReducer";
import SignupReducer from "./screens/Signup/SignupReducer";

const reducers = combineReducers({
  signIn: SigninReducer,
  signUp: SignupReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
