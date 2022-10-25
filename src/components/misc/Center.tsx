import { ReactNode } from "react";

//komponent centrujący jego zawartość - dzieci

export default function Center({ children }: { children: ReactNode }) {
  return <div className="flex justify-center">{children}</div>;
}
