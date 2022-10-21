import { useContext } from "react";
import { AppContext, Action } from "../interfaces/AppContext";
import { appContext } from "../context/appContext";

export const appRedcuer = (state: AppContext, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS":
      console.log("usersAction");
      return { ...state, users: payload };
    case "FETCH_TODOS":
      console.log("todosAction");
      return { ...state, todos: payload };
    case "FETCH_POSTS":
      console.log("todosAction");
      return { ...state, posts: payload };

    default:
      throw new Error("No action specified");
  }
};
