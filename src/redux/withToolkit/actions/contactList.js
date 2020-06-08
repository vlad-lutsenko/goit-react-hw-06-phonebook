//--------------action creators з redux toolkit--------------

import { createAction } from "@reduxjs/toolkit";
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACT_LIST } from "../types";

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const setContactList = createAction(SET_CONTACT_LIST);
