import { ReactNode } from "react";

export default function ColumnWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col mx-2">{children}</div>;
}
