import { Comment } from "../../interfaces/Comments";

function CommentCard({ commentData: { email } }: { commentData: Comment }) {
  return <div>{email}</div>;
}

export default CommentCard;
