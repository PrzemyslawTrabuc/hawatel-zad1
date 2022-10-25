import { NavLink } from "react-router-dom";
import MyNavLink from "./misc/MyNavLink";

function Header() {
  return (
    <header className="bg-slate-50 shadow-sm mb-5 px-5 sticky top-0 z-10">
      <span className="flex sm:justify-end sm:flex-row sm:flex-end flex-col items-center">
        <MyNavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to="/users"
          >
            Users
          </NavLink>
        </MyNavLink>
        <MyNavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to="/todos"
          >
            ToDos
          </NavLink>
        </MyNavLink>
        <MyNavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            to="/posts"
          >
            Posts
          </NavLink>
        </MyNavLink>
      </span>
    </header>
  );
}

export default Header;
