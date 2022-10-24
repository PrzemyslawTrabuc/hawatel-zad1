import { ReactNode, useContext, useEffect, useState } from "react";
import { ToDo } from "../interfaces/ToDos";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext, dispatchContext } from "../context/appContext";
import Loading from "../components/misc/Loading";
import Pagination from "../components/Pagination/Pagination";

function ToDosPage() {
  const { context } = useContext(appContext);
  const { dispatch } = useContext(dispatchContext);

  const handleFetch = async (pageNumber: number) => {
    const todos = await fetchData("todos", pageNumber);
    dispatch({ type: ActionsTypes.FETCH_TODOS, payload: todos });
  };

  const renderTodosList = () => {
    if (!context.todos) return <Loading></Loading>;
    const todosList: ReactNode = context.todos.data.map((todo: ToDo) => {
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
        <Pagination pagination={context.todos.meta.pagination}></Pagination>
      </>
    );
  };

  useEffect(() => {
    if (!context.todos) {
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
