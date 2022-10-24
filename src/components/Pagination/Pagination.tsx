import { Meta } from "../../interfaces/Meta";
import { useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { ActionsTypes } from "../../interfaces/AppContext";
import { useContext } from "react";
import { dispatchContext } from "../../context/appContext";
import { useLocation } from "react-router-dom";
import Loading from "../misc/Loading";

function Pagination({ pagination }: Meta) {
  const { dispatch } = useContext(dispatchContext);
  const { page, pages, total } = pagination;
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(false);
  const [pageToGo, setPageToGo] = useState<number>(0);

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

  const goToPage = async (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber !== page) {
      setIsLoading(true);
      const data = await fetchData(location, pageNumber);
      dispatch({ type: getActionType(), payload: data });
      setPageToGo(0);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center gap-2 mt-3 mb-3 content-center bg-slate-50 h-16 items-center">
        <button
          className="text-center bg-sky-500 text-white px-2 py-1 rounded-sm shadow-md min-w-[80px]"
          onClick={previousPage}
        >
          Previous
        </button>
        <div className="leading-7">
          {page}/{pages}
        </div>
        <button
          className="text-center bg-sky-500 text-white px-2 py-1 rounded-sm shadow-md min-w-[80px]"
          onClick={nextPage}
        >
          Next
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            goToPage(pageToGo);
          }}
        >
          <label htmlFor="pageNumber" />
          <input
            type="number"
            name="pageNumber"
            id="pageNumber"
            placeholder={page.toString()}
            value={pageToGo}
            onChange={(e) => setPageToGo(parseInt(e.target.value))}
            className="border-2 border-sky-200 rounded-sm w-12 h-8"
          ></input>
          <button
            className="text-center bg-sky-500 text-white px-2 py-1 rounded-sm shadow-md min-w-[20px] ml-1"
            type="submit"
          >
            Go
          </button>
        </form>
        {isLoading && <Loading></Loading>}
      </div>
    </>
  );
}

export default Pagination;
