import { ReactNode, useContext, useEffect } from "react";
import { User } from "../interfaces/Users";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext } from "../context/appContext";
import Loading from "../components/misc/Loading";
import Pagination from "../components/misc/Pagination";
import AddUserForm from "../components/AddUser/AddUserForm";
import Title from "../components/misc/Title";
import Center from "../components/misc/Center";
import UserCard from "../components/Users/UserCard";

function UsersPage() {
  const { context, dispatch } = useContext(appContext);

  const handleFetch = async (pageNumber: number) => {
    const users = await fetchData("users", pageNumber);
    dispatch({ type: ActionsTypes.FETCH_USERS, payload: users });
  };

  const renderUsersList = () => {
    if (!context.users) return <Loading></Loading>;
    const usersList: ReactNode = context.users.data.map((user: User) => {
      return <UserCard key={user.id} userData={user}></UserCard>;
    });
    return (
      <>
        {usersList}
        <Pagination pagination={context.users.meta.pagination}></Pagination>
      </>
    );
  };

  useEffect(() => {
    if (!context.users) {
      handleFetch(1);
    }
  }, [context.users]);

  return (
    <>
      <Center>
        <Title>Users</Title>
      </Center>
      {renderUsersList()}
      <h2>Add User</h2>
      <AddUserForm></AddUserForm>
    </>
  );
}

export default UsersPage;
