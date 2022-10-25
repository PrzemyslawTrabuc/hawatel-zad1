import { ReactNode } from "react";

// komponent tworzący kolumnę ze swoich dzieci

export default function ColumnWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col mx-2">{children}</div>;
}
