import { combineReducers } from "redux";
import { filterReducer } from "../reducers/filterReducer";
import { contactListReducer } from "../reducers/contactListReducer";

const rootReducer = combineReducers({
  contacts: contactListReducer,
  filter: filterReducer,
});

export default rootReducer;
