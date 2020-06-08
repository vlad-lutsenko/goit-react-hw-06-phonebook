//-----------reducers без redux toolkit--------------

// import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT_LIST } from "../types";

// const initialState = [];
// export const contactListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [action.payload, ...state];

//     case DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== action.payload);

//     case SET_CONTACT_LIST:
//       return [...action.payload, ...state];
//     default:
//       return state;
//   }
// };

//-----------reducers з redux toolkit--------------

import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  setContactList,
} from "../actions/contactList";

export const contactListReducer = createReducer([], {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [setContactList]: (state, action) => [...action.payload, ...state],
});
