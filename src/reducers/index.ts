import { combineReducers } from "redux";
import { sessionReducer } from "./session";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer
});
