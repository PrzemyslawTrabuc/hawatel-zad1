import { ReactElement } from "react";
import { Post } from "../../interfaces/Posts";
import Center from "../misc/Center";
import Title from "../misc/Title";

// komponent renderujący kartę postu
interface PostProps {
  postData: Post;
  children?: ReactElement;
}

function PostCard({
  postData: { id, title, user_id, body },
  children,
}: PostProps) {
  return (
    <article className="flex flex-col justify-around bg-slate-50 my-3 p-5 mx-2 rounded-md border-[1px] border-sky-200 shadow-sm">
      <div className="flex flex-row justify-betweeen">
        <Center>
          <Title>
            "{title}" ~ {id}
          </Title>
        </Center>
      </div>
      <div className="my-2 text-left">{body}</div>
      <span className="italic text-sm text-right">(User id: {user_id})</span>
      {children}
    </article>
  );
}

export default PostCard;
