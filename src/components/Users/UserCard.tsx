import { User } from "../../interfaces/Users";
import Title from "../misc/Title";
import ColorDot from "../misc/ColotDot";

export default function UserCard({
  userData: { id, name, email, gender, status },
}: {
  userData: User;
}) {
  return (
    <article className=" mx-2 flex flex-col jusitfy-around bg-slate-50 p-5 my-1 rounded-sm shadow-sm border border-sky-200">
      <span>
        <span className="text-sm italic">(id: {id}) </span>
        <Title size={"lg"}>
          {name} {status === "active" && <ColorDot color="green-500" />}
        </Title>
      </span>
      <span>@: {email}</span>
      <span className="text-sm italic">{gender}</span>
    </article>
  );
}
