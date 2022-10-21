import { Meta } from "./Meta";
import { Users } from "./Users";
import { ToDos } from "./ToDos";
import { Posts } from "./Posts";

export enum ActionsTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_POSTS = "FETCH_POSTS",
}

export interface Action {
  type: ActionsTypes;
  payload: any;
}

export interface AppContext {
  users: Users | null;
  todos: ToDos | null;
  posts: Posts | null;
}
