import { useReducer } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  appContext as AppContext,
  dispatchContext as DispatchContext,
  initialContext,
} from "./context/appContext";
import { appRedcuer } from "./reducers";
import UsersPage from "./pages/UsersPage";
import ToDosPage from "./pages/ToDosPage";
import Header from "./components/Header";
import PostsPage from "./pages/PostsPage";

function App() {
  const [context, dispatch] = useReducer(appRedcuer, initialContext);

  return (
    <BrowserRouter>
      <DispatchContext.Provider value={{ dispatch }}>
        <AppContext.Provider value={{ context }}>
          <Header></Header>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="users"></Navigate>}
            ></Route>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/todos" element={<ToDosPage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </AppContext.Provider>
      </DispatchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
