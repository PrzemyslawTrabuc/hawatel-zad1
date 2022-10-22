import { Meta } from "../interfaces/Meta";
import { useState } from "react";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { useContext } from "react";
import { appContext } from "../context/appContext";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

function Pagination({ pagination }: Meta) {
  const { dispatch } = useContext(appContext);
  const { limit, links, page, pages, total } = pagination;
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(false);

  const getActionType = () => {
    if (location === "/users") return ActionsTypes.FETCH_USERS;
    if (location === "/todos") return ActionsTypes.FETCH_TODOS;
    if (location === "/posts") return ActionsTypes.FETCH_POSTS;
    //  ActionsTypes.FETCH_COMMENTS
  };

  const nextPage = async () => {
    if (page < total) {
      setIsLoading(true);
      const data = await fetchData(location, page + 1);
      dispatch({ type: getActionType(), payload: data });
      setIsLoading(false);
    }
  };

  const previousPage = async () => {
    if (page > 1) {
      setIsLoading(true);
      const data = await fetchData(location, page - 1);
      dispatch({ type: getActionType(), payload: data });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex">
      <button onClick={previousPage}>Previous</button>
      <div>
        {page}/{pages}
      </div>
      <button onClick={nextPage}>Next</button>
      {isLoading && <Loading></Loading>}
    </div>
  );
}

export default Pagination;
