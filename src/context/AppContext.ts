import React from "react";
import { ActionsTypes, AppContext } from "../interfaces/AppContext";

export const initialState: AppContext = {
  users: null,
};

export const appContext = React.createContext<{
  state: AppContext;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });
