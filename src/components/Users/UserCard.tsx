import { User } from "../../interfaces/Users";

export default function UserCard({
  userData: { id, name },
}: {
  userData: User;
}) {
  return <div>{id}</div>;
}
