import { Meta } from "./Meta";
import { User } from "./User";

export enum ActionsTypes {
  FETCH_USERS = "FETCH_USERS",
}

export interface Action {
  type: ActionsTypes;
  payload: any;
}

export interface AppContext {
  users: {
    meta: Meta;
    data: User;
  } | null;
}
