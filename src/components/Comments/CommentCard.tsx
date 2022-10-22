import { Comment } from "../../interfaces/Comments";

interface CommentProps {
  commentData: Comment;
}
function CommentCard({ commentData: { email } }: CommentProps) {
  console.log("CommentCard");
  return <div>{email}</div>;
}

export default CommentCard;
