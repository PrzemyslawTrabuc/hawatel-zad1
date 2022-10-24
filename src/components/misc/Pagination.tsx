import { Meta } from "../../interfaces/Meta";
import { useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { ActionsTypes } from "../../interfaces/AppContext";
import { useContext } from "react";
import { dispatchContext } from "../../context/appContext";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import { isContext } from "vm";

function Pagination({ pagination }: Meta) {
  const { dispatch } = useContext(dispatchContext);
  const { page, pages, total } = pagination;
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(false);

  const getActionType = () => {
    if (location === "/users") return ActionsTypes.FETCH_USERS;
    if (location === "/todos") return ActionsTypes.FETCH_TODOS;
    if (location === "/posts") return ActionsTypes.FETCH_POSTS;
  };

  const nextPage = async () => {
    if (page < total && !isLoading) {
      setIsLoading(true);
      const data = await fetchData(location, page + 1);
      dispatch({ type: getActionType(), payload: data });
    }
    setIsLoading(false);
  };

  const previousPage = async () => {
    if (page > 1 && !isLoading) {
      setIsLoading(true);
      const data = await fetchData(location, page - 1);
      dispatch({ type: getActionType(), payload: data });
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center gap-2 mt-3 mb-3">
        <button
          className="bg-sky-500 text-white px-2 py-1 rounded-sm shadow-md min-w-[80px]"
          onClick={previousPage}
        >
          Previous
        </button>
        <div className="leading-7">
          {page}/{pages}
        </div>
        <button
          className="bg-sky-500 text-white px-2 py-1 rounded-sm shadow-md min-w-[80px]"
          onClick={nextPage}
        >
          Next
        </button>
        <input type="text" placeholder=""></input>
        <button
          className="bg-sky-500 text-white px-2 py-1 rounded-sm shadow-md min-w-[20px]"
          onClick={nextPage}
        >
          Go
        </button>

        {isLoading && <Loading></Loading>}
      </div>
    </>
  );
}

export default Pagination;
