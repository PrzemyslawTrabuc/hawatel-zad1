import { Meta } from "./Meta";

export interface ToDo {
  map(arg0: (user: ToDo) => JSX.Element): import("react").ReactNode;
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: "completed" | "pending";
}

export interface ToDos {
  meta: Meta;
  data: Array<ToDo>;
}
