//-----------reducers без redux toolkit--------------

import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT_LIST } from "../types";

const initialState = [];
export const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [action.payload, ...state];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);

    case SET_CONTACT_LIST:
      return [...action.payload, ...state];
    default:
      return state;
  }
};
