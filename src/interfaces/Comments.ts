import { Meta } from "./Meta";

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface Comments {
  map(arg0: (comment: Comment) => JSX.Element): unknown;
  forEach(arg0: (comment: Comments) => void): unknown;
  meta: Meta;
  data: Array<Comment>;
}
