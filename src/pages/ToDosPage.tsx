import { ReactNode, useContext, useEffect } from "react";
import { ToDo } from "../interfaces/ToDos";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext, dispatchContext } from "../context/appContext";
import Loading from "../components/misc/Loading";
import Pagination from "../components/Pagination/Pagination";
import ToDoCard from "../components/ToDos/ToDoCard";
import Banner from "../components/misc/Banner";
import ContainerWrapper from "../components/misc/ContainerWrapper";

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
      return <ToDoCard key={todo.id} toDoData={todo}></ToDoCard>;
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
      <Banner>ToDOs</Banner>
      <ContainerWrapper>
        <main>{renderTodosList()}</main>
      </ContainerWrapper>
    </>
  );
}

export default ToDosPage;
