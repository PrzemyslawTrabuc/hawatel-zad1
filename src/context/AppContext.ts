import React from "react";
import { AppContext } from "../interfaces/AppContext";

export const initialContext: AppContext = {
  users: null,
  posts: null,
  todos: null,
  comments: null,
};

export const appContext = React.createContext<{
  context: AppContext;
  dispatch: React.Dispatch<any>;
}>({ context: initialContext, dispatch: () => {} });
