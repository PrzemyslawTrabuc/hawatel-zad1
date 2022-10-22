import { Meta } from "../interfaces/Meta";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { useContext } from "react";
import { appContext } from "../context/appContext";
import { useLocation } from "react-router-dom";

function Pagination({ pagination }: Meta) {
  const { dispatch } = useContext(appContext);
  const { limit, links, page, pages, total } = pagination;
  const location = useLocation().pathname;

  const getActionType = () => {
    if (location === "/users") return ActionsTypes.FETCH_USERS;
    if (location === "/todos") return ActionsTypes.FETCH_TODOS;
    if (location === "/posts") return ActionsTypes.FETCH_POSTS;
    //  ActionsTypes.FETCH_COMMENTS
  };

  const nextPage = async () => {
    if (page < total) {
      const data = await fetchData(location, page + 1);
      dispatch({ type: getActionType(), payload: data });
    }
  };

  const previousPage = async () => {
    if (page > 1) {
      const data = await fetchData(location, page - 1);
      dispatch({ type: getActionType(), payload: data });
    }
  };

  return (
    <div className="flex">
      <button onClick={previousPage}>Previous</button>
      <div>
        {page}/{pages}
      </div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pagination;
