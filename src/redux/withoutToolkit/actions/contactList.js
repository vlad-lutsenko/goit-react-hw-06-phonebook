//-----------action creators без redux toolkit--------------
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT_LIST } from "../types";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setContactList = (contacts) => ({
  type: SET_CONTACT_LIST,
  payload: contacts,
});
