import { useContext } from "react";
import { AppContext, Action } from "../interfaces/AppContext";
import { appContext } from "../context/AppContext";

export const appRedcuer = (state: AppContext, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS":
      console.log("usersAction");
      return { ...state, users: payload };

    default:
      throw new Error("No action specified");
  }
};
