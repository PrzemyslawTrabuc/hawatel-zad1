import { User } from "../../interfaces/Users";
import Title from "../misc/Title";
import ColorDot from "../misc/ColotDot";

// komponent renderujący kartę użytkownika

export default function UserCard({
  userData: { id, name, email, gender, status },
}: {
  userData: User;
}) {
  return (
    <article className=" mx-2 flex flex-col jusitfy-around bg-slate-50 p-5 my-1 rounded-md shadow-sm border border-sky-200">
      <span>
        <span className="text-sm italic">(id: {id}) </span>
        <Title>
          {name} {status === "active" && <ColorDot />}
        </Title>
      </span>
      <span>@: {email}</span>
      <span className="text-sm italic">{gender}</span>
    </article>
  );
}
