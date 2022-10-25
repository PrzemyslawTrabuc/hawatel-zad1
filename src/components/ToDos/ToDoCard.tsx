import { ToDo } from "../../interfaces/ToDos";
import { dateConvert } from "../../utils/dateConvert";
import ColorDot from "../misc/ColotDot";

export default function ToDoCard({
  toDoData: { id, user_id, title, due_on, status },
}: {
  toDoData: ToDo;
}) {
  dateConvert(due_on);
  return (
    <div className="flex flex-row bg-slate-50 shadow-sm mx-3 my-3 p-2 rounded-md justify-around text-center border-[1px] border-sky-200">
      <span className="w-18 italic">(id: {id}) </span>
      <span className="w-18 ">User: {user_id} </span>
      <span className="w-1/2 text-md font-semibold text-left">{title} </span>
      <span className="w-18">{dateConvert(due_on)} </span>
      <span className="w-24 ">
        {status}{" "}
        {status === "completed" ? (
          <ColorDot></ColorDot>
        ) : (
          <ColorDot type="negative"></ColorDot>
        )}
      </span>
    </div>
  );
}
