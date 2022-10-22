import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/todos">ToDos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
