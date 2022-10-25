import { ReactNode } from "react";

export default function Button({
  children,
  type,
  handleClick,
}: {
  children: ReactNode;
  type: "button" | "submit";
  handleClick?: any;
}) {
  return (
    <button
      className="text-center bg-sky-500 text-white px-2 py-1 rounded-md shadow-md"
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}
