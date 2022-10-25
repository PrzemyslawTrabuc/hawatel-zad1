import React from "react";
import { AppContext } from "../interfaces/AppContext";

// tworznie contextu dzieki CONTEXT API w React, który będzie możliwy do odczytania w każdym miejscu aplikacji zagnieżdżonym w providerze

export const initialContext: AppContext = {
  //typowanie contextu
  users: null,
  posts: null,
  todos: null,
  comments: null,
};

export const appContext = React.createContext<{
  context: AppContext;
}>({ context: initialContext });

export const dispatchContext = React.createContext<{
  dispatch: React.Dispatch<any>;
}>({
  dispatch: () => {},
});
