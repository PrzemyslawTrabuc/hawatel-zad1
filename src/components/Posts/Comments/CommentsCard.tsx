import { ReactNode, useContext } from "react";
import { appContext } from "../../../context/appContext";
import { Comments, Comment } from "../../../interfaces/Comments";
import CommentCard from "./CommentCard";

// komponent zawierający logikę renderowania listy komentarzy

function CommentsCard({ post_id }: { post_id: number }) {
  const { context } = useContext(appContext);

  const getCorrespondingComments = (post_id: number) => {
    // funckja wybierająca z contextu komenatze odpowiadajace danemu postowi po jego ID
    if (!context.comments) {
      return;
    } // jeśli brak komenatzy w context wychodzi z funkcji
    const commentsById: Array<Comment> = [];
    context.comments.forEach((comment: Comments) => {
      comment.data.forEach((c: Comment) => {
        if (c.post_id === post_id) commentsById.push(c); // przypisuje w pętli komentarze do postu
      });
    });
    return commentsById;
  };
  const renderComments = () => {
    // funkcja renderując listę komentarzy
    const comments: Array<Comment> | undefined =
      getCorrespondingComments(post_id);
    if (comments && comments?.length < 1)
      return (
        <>
          <span className="italic">No comments</span>
        </>
      );
    const commentsToRender: ReactNode =
      comments &&
      comments.map((comment) => {
        return (
          <CommentCard key={comment.id} commentData={comment}></CommentCard>
        );
      });

    return commentsToRender;
  };

  return (
    <div className="my-3">
      <span className="italic">Comments:</span>
      <div>{renderComments()}</div>
    </div>
  );
}

export default CommentsCard;
