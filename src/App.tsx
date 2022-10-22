import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appContext as AppContext, initialContext } from "./context/appContext";
import { appRedcuer } from "./reducers";
import UsersPage from "./pages/UsersPage";
import ToDosPage from "./pages/ToDosPage";
import Header from "./components/Header";
import PostsPage from "./pages/PostsPage";

function App() {
  const [context, dispatch] = useReducer(appRedcuer, initialContext);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ context, dispatch }}>
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
