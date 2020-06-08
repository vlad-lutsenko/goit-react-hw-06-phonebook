//-----------action creators з redux toolkit--------------

import { createAction } from "@reduxjs/toolkit";
import { SET_FILTER } from "../types";

export const setFilter = createAction(SET_FILTER);
