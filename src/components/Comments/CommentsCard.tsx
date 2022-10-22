import { ReactNode, useContext, useRef, useEffect } from "react";
import { appContext } from "../../context/appContext";
import { Comments, Comment } from "../../interfaces/Comments";
import CommentCard from "./CommentCard";
import Loading from "../Loading";
import { Meta } from "../../interfaces/Meta";

function CommentsCard({ post_id }: { post_id: number }) {
  const { context } = useContext(appContext);
  const shoudlRenderLoading = useRef(true);

  useEffect(() => {
    shoudlRenderLoading.current = false;
  });

  const getCorrespondingComments = (post_id: number) => {
    if (!context.comments) return;
    const commentsById: Array<Comment> = [];
    context.comments.forEach((comment: Comments) => {
      comment.data.forEach((c: Comment) => {
        if (c.post_id === post_id) commentsById.push(c);
      });
    });
    return commentsById;
  };
  const renderComments = () => {
    const comments: Array<Comment> | undefined =
      getCorrespondingComments(post_id);
    if (comments && comments?.length < 1)
      return (
        <>
          {shoudlRenderLoading.current ? (
            <Loading></Loading>
          ) : (
            <span>Brak Komentarzy</span>
          )}
        </>
      );
    const commentsToRender: ReactNode = comments?.map((comment) => {
      return <CommentCard commentData={comment}></CommentCard>;
    });
    return commentsToRender;
  };

  return <div>{renderComments()}</div>;
}

export default CommentsCard;
