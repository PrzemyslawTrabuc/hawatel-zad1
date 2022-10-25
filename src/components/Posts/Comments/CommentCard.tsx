import { Comment } from "../../../interfaces/Comments";

function CommentCard({
  commentData: { email, id, body },
}: {
  commentData: Comment;
}) {
  return (
    <article className="bg-sky-400 text-white shadow-md rounded-md my-2 p-2">
      <div className="font-semibold">{id}:</div>
      <span>{body}</span>
      <div className="text-right">~ {email}</div>
    </article>
  );
}

export default CommentCard;
