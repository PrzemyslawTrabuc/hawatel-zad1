import { ReactElement } from "react";
import { Post } from "../../interfaces/Posts";

interface PostProps {
  postData: Post;
  children?: ReactElement;
}

function PostCard({ postData: { id, title }, children }: PostProps) {
  return (
    <div key={id}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default PostCard;
