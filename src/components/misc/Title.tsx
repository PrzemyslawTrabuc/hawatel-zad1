import { ReactNode } from "react";

// komponent tytułu

export default function Title({ children }: { children: ReactNode }) {
  return <span className="font-medium text-xl">{children}</span>;
}
