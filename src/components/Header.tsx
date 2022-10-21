import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/todos">ToDos</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  );
}

export default Header;
