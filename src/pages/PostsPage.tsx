import { ReactNode, useContext, useEffect, useRef } from "react";
import { Post } from "../interfaces/Posts";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext } from "../context/appContext";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function PostsPage() {
  const { context, dispatch } = useContext(appContext);

  const fetchCorrespondingComments = async (post_id: number) => {
    const comments = await fetchData(`posts/${post_id}/comments`);
    dispatch({ type: ActionsTypes.FETCH_COMMENTS, payload: comments });
  };

  const handleFetch = async (pageNumber: number) => {
    const posts = await fetchData("posts", pageNumber);
    dispatch({ type: ActionsTypes.FETCH_POSTS, payload: posts });
  };

  const renderPostsList = () => {
    if (!context.posts) return <Loading></Loading>;
    const postsList: ReactNode = context.posts.data.map((posts: Post) => {
      return (
        <div key={posts.id}>
          <div>{posts.id}</div>
          <div>{posts.title}</div>
        </div>
      );
    });
    return (
      <>
        {postsList}
        <Pagination pagination={context.posts.meta.pagination}></Pagination>
      </>
    );
  };

  useEffect(() => {
    if (!context.posts) {
      handleFetch(1);
    }
  }, []);

  return (
    <>
      <h1>POSTs</h1>
      {renderPostsList()}
    </>
  );
}

export default PostsPage;
