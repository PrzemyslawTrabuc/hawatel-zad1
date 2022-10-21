import { Meta } from "./Meta";

export interface User {
  map(arg0: (user: User) => JSX.Element): import("react").ReactNode;
  email: string;
  gender: "male" | "female";
  id: string;
  name: string;
  status: "active" | "inactive";
}

export interface Users {
  meta: Meta;
  data: Array<User>;
}
