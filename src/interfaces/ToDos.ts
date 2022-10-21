import { Meta } from "./Meta";

export interface ToDo {
  map(arg0: (user: ToDo) => JSX.Element): import("react").ReactNode;
  id: string;
  user_id: string;
  title: string;
  due_on: string;
  status: "completed" | "pending";
}

export interface ToDos {
  meta: Meta;
  data: Array<ToDo>;
}
