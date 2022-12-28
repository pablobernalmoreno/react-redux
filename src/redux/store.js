import { createStore } from "redux";
import { combineReducers } from "redux";
import addUserReducer from "./reducers/userReducer";

const reducers = combineReducers({
  userReducer: addUserReducer,
});

const store = createStore(
  reducers
);

store.getState();
export default store;