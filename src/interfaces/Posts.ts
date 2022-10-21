import { Meta } from "./Meta";

export interface Post {
  map(arg0: (user: Post) => JSX.Element): import("react").ReactNode;
  id: string;
  user_id: string;
  title: string;
  body: string;
}

export interface Posts {
  meta: Meta;
  data: Array<Post>;
}
