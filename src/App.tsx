import { useReducer } from "react";
import { appContext as AppContext } from "./context/AppContext";
import { initialState } from "./context/AppContext";
import { appRedcuer } from "./reducers";
import UsersPage from "./pages/UsersPage";

function App() {
  const [state, dispatch] = useReducer(appRedcuer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">Hello World!</div>
      <UsersPage></UsersPage>
    </AppContext.Provider>
  );
}

export default App;
