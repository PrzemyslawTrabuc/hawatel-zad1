import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <span className="font-medium text-xl">{children}</span>;
}
