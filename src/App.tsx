import { useReducer } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Footer from "./components/Footer";

function App() {
  const [context, dispatch] = useReducer(appRedcuer, initialContext);
  // hook useReducer zapewniający mechniake podobną do biblioteki,
  // Redux aby przechowywać stan aplikacji jego parametry to własny reducer i początkowe wartości stanu aplikacji w context oraz funkcję dispatch pozwalająca znmienic ten context za pomocą reducera reducers/index.ts
  return (
    <div className="flex flex-col min-h-screen">
      <HashRouter>
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
            <Footer></Footer>
          </AppContext.Provider>
        </DispatchContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
