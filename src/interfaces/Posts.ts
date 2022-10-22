import { Meta } from "./Meta";

export interface Post {
  map(arg0: (user: Post) => JSX.Element): import("react").ReactNode;
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface Posts {
  meta: Meta;
  data: Array<Post>;
}
