import { ReactNode } from "react";

// komponent stylujący link w nawigacji

export default function MyNavLink({ children }: { children: ReactNode }) {
  return (
    <span className="mx-5 sm:my-3 hover:border-b-2 border-b-2 border-slate-50 hover:border-blue-400 px-1 py-1 transition-all text-center w-auto">
      {children}
    </span>
  );
}
