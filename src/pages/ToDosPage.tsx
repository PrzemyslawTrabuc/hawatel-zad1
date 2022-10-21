import { ReactNode, useContext, useEffect, useRef } from "react";
import { ToDo } from "../interfaces/ToDos";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext } from "../context/appContext";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function ToDosPage() {
  const { state, dispatch } = useContext(appContext);

  const handleFetch = async (pageNumber: number) => {
    const todos = await fetchData(pageNumber, "todos");
    dispatch({ type: ActionsTypes.FETCH_TODOS, payload: todos });
  };

  const renderTodosList = () => {
    if (!state.todos) return <Loading></Loading>;
    const todosList: ReactNode = state.todos.data.map((todo: ToDo) => {
      return (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.title}</div>
        </div>
      );
    });
    return (
      <>
        {todosList}
        <Pagination pagination={state.todos.meta.pagination}></Pagination>
      </>
    );
  };

  useEffect(() => {
    if (!state.todos) {
      handleFetch(1);
    }
  }, []);

  return (
    <>
      <h1>TODOs</h1>
      {renderTodosList()}
    </>
  );
}

export default ToDosPage;
