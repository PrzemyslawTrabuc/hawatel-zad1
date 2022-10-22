import { Comment } from "../../interfaces/Comments";

interface CommentProps {
  commentData: Comment;
}
function CommentCard({ commentData: { email } }: CommentProps) {
  return <div>{email}</div>;
}

export default CommentCard;
