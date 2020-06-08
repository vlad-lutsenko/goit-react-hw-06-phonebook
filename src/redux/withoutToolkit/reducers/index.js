import { combineReducers } from "redux";
import { filterReducer } from "../reducers/filterReducer";
import { contactListReducer } from "./contactListReducer";

const rootReducer = combineReducers({
  contacts: contactListReducer,
  filter: filterReducer,
});

export default rootReducer;
