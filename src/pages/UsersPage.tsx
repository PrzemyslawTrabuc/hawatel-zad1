import { useContext, useEffect, useReducer } from "react";
import { appRedcuer } from "../reducers/index";
import { initialState } from "../context/AppContext";
import { fetchUsers } from "../utils/fetchUsers";
import { ActionsTypes } from "../interfaces/AppContext";
import { appContext } from "../context/AppContext";

function UsersPage() {
  //const [state, dispatch] = useReducer(appRedcuer, initialState);
  const { state, dispatch } = useContext(appContext);
  const hanleFetch = async () => {
    const users = await fetchUsers();
    dispatch({ type: ActionsTypes.FETCH_USERS, payload: users });
    await console.log(state);
  };
  useEffect(() => {
    hanleFetch();
  }, []);

  return <div>Users</div>;
}

export default UsersPage;
