import { Meta } from "./Meta";

export interface Comment {
  id: string;
  post_id: string;
  name: string;
  email: string;
  body: string;
}

export interface Comments {
  meta: Meta;
  data: Array<Comment>;
}
