import { ReactNode, useContext, useEffect, useRef } from "react";
import { User } from "../interfaces/Users";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext } from "../context/appContext";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function UsersPage() {
  const { state, dispatch } = useContext(appContext);

  const handleFetch = async (pageNumber: number) => {
    const users = await fetchData(pageNumber, "users");
    dispatch({ type: ActionsTypes.FETCH_USERS, payload: users });
  };

  const renderUsersList = () => {
    if (!state.users) return <Loading></Loading>;
    const usersList: ReactNode = state.users.data.map((user: User) => {
      return (
        <div key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
        </div>
      );
    });
    return (
      <>
        {usersList}
        <Pagination pagination={state.users.meta.pagination}></Pagination>
      </>
    );
  };

  useEffect(() => {
    if (!state.users) {
      handleFetch(1);
    }
  }, []);

  return (
    <>
      <h1>USERs</h1>
      {renderUsersList()}
    </>
  );
}

export default UsersPage;
