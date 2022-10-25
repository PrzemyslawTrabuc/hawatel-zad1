import { ReactNode, useContext, useEffect } from "react";
import { User } from "../interfaces/Users";
import { fetchData } from "../utils/fetchData";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext, dispatchContext } from "../context/appContext";
import Loading from "../components/misc/Loading";
import Pagination from "../components/Pagination/Pagination";
import AddUserForm from "../components/AddUser/AddUserForm";
import Title from "../components/misc/Title";
import Center from "../components/misc/Center";
import UserCard from "../components/Users/UserCard";
import Banner from "../components/misc/Banner";
import ContainerWrapper from "../components/misc/ContainerWrapper";

// strina użytkowników

function UsersPage() {
  const { context } = useContext(appContext);
  const { dispatch } = useContext(dispatchContext);

  const renderUsersList = () => {
    // funckcja renderująca listę użytkowników
    if (!context.users) return <Loading></Loading>;
    const usersList: ReactNode = context.users.data.map((user: User) => {
      return <UserCard key={user.id} userData={user}></UserCard>;
    });
    return <>{usersList}</>;
  };

  useEffect(() => {
    if (!context.users) {
      const handleFetch = async (pageNumber: number) => {
        const users = await fetchData("users", pageNumber);
        dispatch({ type: ActionsTypes.FETCH_USERS, payload: users });
      };
      handleFetch(1);
    }
  }, [context.users, dispatch]);

  return (
    <>
      <Banner>Users</Banner>
      <ContainerWrapper>
        <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {renderUsersList()}
        </main>
      </ContainerWrapper>
      {context.users && (
        <>
          <Pagination pagination={context.users.meta.pagination}></Pagination>
          <Center>
            <Title>Add User</Title>
          </Center>
          <AddUserForm></AddUserForm>
        </>
      )}
    </>
  );
}

export default UsersPage;
