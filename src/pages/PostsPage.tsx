import { ReactNode, useContext, useEffect, useRef } from "react";
import { Post } from "../interfaces/Posts";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext } from "../context/appContext";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function PostsPage() {
  const { state, dispatch } = useContext(appContext);

  const handleFetch = async (pageNumber: number) => {
    const posts = await fetchData(pageNumber, "posts");
    dispatch({ type: ActionsTypes.FETCH_POSTS, payload: posts });
  };

  const renderPostsList = () => {
    if (!state.posts) return <Loading></Loading>;
    const postsList: ReactNode = state.posts.data.map((posts: Post) => {
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
        <Pagination pagination={state.posts.meta.pagination}></Pagination>
      </>
    );
  };

  useEffect(() => {
    if (!state.posts) {
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
