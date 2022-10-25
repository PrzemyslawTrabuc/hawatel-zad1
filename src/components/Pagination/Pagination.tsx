import { Meta } from "../../interfaces/Meta";
import { useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { ActionsTypes } from "../../interfaces/AppContext";
import { useContext } from "react";
import { dispatchContext } from "../../context/appContext";
import { useLocation } from "react-router-dom";
import Loading from "../misc/Loading";
import MyButton from "../misc/MyButton";

// komponent paginacji

function Pagination({ pagination }: Meta) {
  const { dispatch } = useContext(dispatchContext);
  const { page, total } = pagination;
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(false);
  const [pageToGo, setPageToGo] = useState<number>(0);

  const getActionType = () => {
    if (location === "/users") return ActionsTypes.FETCH_USERS;
    if (location === "/todos") return ActionsTypes.FETCH_TODOS;
    if (location === "/posts") return ActionsTypes.FETCH_POSTS;
  }; // w zależności od linku zwróci odpowiedni typ akcji dla reducera

  const nextPage = async () => {
    if (page < Math.ceil(total / 12) && !isLoading) {
      setIsLoading(true);
      const data = await fetchData(location, page + 1); // pobranie danych
      dispatch({ type: getActionType(), payload: data }); // zapisanie contextu
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // przewija stronę w górę aby użytkownik zobaczył błąd lub sukces
      }, 300);
    }
    setIsLoading(false);
  }; // funkcja odpowiadajaca za wczytanie kolejnej strony danych

  const previousPage = async () => {
    if (page > 1 && !isLoading) {
      setIsLoading(true);
      const data = await fetchData(location, page - 1);
      dispatch({ type: getActionType(), payload: data });
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // przewija stronę w górę aby użytkownik zobaczył błąd lub sukces
      }, 300);
    }
    setIsLoading(false);
  }; // funkcja odpowiadajaca za wczytanie poprzdeniej strony danych

  const goToPage = async (pageNumber: number) => {
    if (
      pageNumber > 0 &&
      pageNumber !== page &&
      pageNumber <= Math.ceil(total / 12)
    ) {
      setIsLoading(true);
      const data = await fetchData(location, pageNumber);
      dispatch({ type: getActionType(), payload: data });
      setPageToGo(0);
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // przewija stronę w górę aby użytkownik zobaczył błąd lub sukces
      }, 300);
    }
    setIsLoading(false);
  }; // funckja pozwalająca udać się do strony podanej przez użytkownika w formularzu

  // każda z funkcji zaczyna ustawineiem loading na true a kończy ustawieniem laoding na false - zaleznie tego stanu aplikacja wyświetla ekran ładowania

  return (
    <>
      <div className="flex justify-center gap-2 mt-3 mb-3 content-center h-16 items-center">
        <MyButton type="button" handleClick={previousPage}>
          Previous
        </MyButton>
        <div className="leading-7">
          {page}/{Math.ceil(total / 12)}
        </div>
        <MyButton type="button" handleClick={nextPage}>
          Next
        </MyButton>
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
            className="border-2 border-sky-200 rounded-md w-12 h-8"
          ></input>
          <MyButton type="submit">Go</MyButton>
        </form>
        {isLoading && <Loading></Loading>}
      </div>
    </>
  );
}

export default Pagination;
