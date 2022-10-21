import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { appContext as AppContext, initialState } from "./context/appContext";
import { appRedcuer } from "./reducers";
import UsersPage from "./pages/UsersPage";
import ToDosPage from "./pages/ToDosPage";
import Header from "./components/Header";
import PostsPage from "./pages/PostsPage";

function App() {
  const [state, dispatch] = useReducer(appRedcuer, initialState);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header></Header>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<ToDosPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
