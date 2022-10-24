import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Post } from "../interfaces/Posts";
import { Comments } from "../interfaces/Comments";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext, dispatchContext } from "../context/appContext";
import Loading from "../components/misc/Loading";
import Pagination from "../components/Pagination/Pagination";
import PostCard from "../components/Posts/PostCard";
import CommentsCard from "../components/Comments/CommentsCard";
import AddPostForm from "../components/AddPost/AddPostForm";

function PostsPage() {
  const { context } = useContext(appContext);
  const { dispatch } = useContext(dispatchContext);
  const shouldUpdate = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const renderPostsList = (comments: Comments | null) => {
    if (!context.posts?.data || !context.comments) {
      return <Loading></Loading>;
    }
    const postsList: ReactNode = context.posts.data.map((post: Post) => {
      return (
        <PostCard key={post.id} postData={post}>
          <CommentsCard post_id={post.id}></CommentsCard>
        </PostCard>
      );
    });
    return <>{postsList}</>;
  };

  useEffect(() => {
    if (!context.posts) {
      const handleFetch = async (pageNumber: number) => {
        const posts = await fetchData("posts", pageNumber);
        dispatch({ type: ActionsTypes.FETCH_POSTS, payload: posts });
      };
      handleFetch(1);
    }
  }, [context.posts, dispatch]);

  useEffect(() => {
    if (shouldUpdate.current === true && context.posts?.data) {
      const fetchCorrespondingComments = async (posts: Array<Post>) => {
        setIsLoading(true);
        const commentsToStore: Array<Comments> = await Promise.all(
          await posts.map(async (post) => {
            return await fetchData(`posts/${post.id}/comments`);
          })
        );
        dispatch({
          type: ActionsTypes.FETCH_COMMENTS,
          payload: commentsToStore,
        });
        setIsLoading(false);
      };
      fetchCorrespondingComments(context.posts.data);
    }
    shouldUpdate.current = true;
  }, [context.posts, dispatch]);

  return (
    <>
      <h1>POSTs</h1>
      {renderPostsList(context.comments)}
      {context.posts && (
        <>
          <Pagination pagination={context.posts.meta.pagination}></Pagination>
          <AddPostForm></AddPostForm>
          {isLoading && context.comments && <Loading />}
        </>
      )}
    </>
  );
}

export default PostsPage;
