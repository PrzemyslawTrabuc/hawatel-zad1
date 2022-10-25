import { ReactNode } from "react";

// komponent stylujący swoje dzieci

export default function ContentCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-around bg-slate-50 my-3 p-5 rounded-md border-[1px] border-sky-200 shadow-sm">
      {children}
    </div>
  );
}
