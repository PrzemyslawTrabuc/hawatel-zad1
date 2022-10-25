import { ToDo } from "../../interfaces/ToDos";
import { dateConvert } from "../../utils/dateConvert";
import ColorDot from "../misc/ColotDot";

//komponent renderujący kartę zadania - todo

export default function ToDoCard({
  toDoData: { id, user_id, title, due_on, status },
}: {
  toDoData: ToDo;
}) {
  dateConvert(due_on);
  return (
    <article className="flex flex-row bg-slate-50 shadow-sm mx-2 my-3 p-2 rounded-md justify-around text-center border-[1px] border-sky-200">
      <span className="sm:w-auto w-18 italic">(id: {id}) </span>
      <span className="sm:w-auto w-18 ">User: {user_id} </span>
      <span className="w-1/2 text-md font-semibold text-left">{title} </span>
      <span className="sm:w-auto w-18">{dateConvert(due_on)} </span>
      <span className="w-24 sm:w-auto ">
        {status}{" "}
        {status === "completed" ? (
          <ColorDot></ColorDot>
        ) : (
          <ColorDot type="negative"></ColorDot>
        )}
      </span>
    </article>
  );
}
