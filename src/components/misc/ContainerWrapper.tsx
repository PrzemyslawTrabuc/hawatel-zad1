import { ReactNode } from "react";

// komponent zamykajacy swoje dzieci w kontenerze

export default function ContainerWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="container mx-auto">{children}</div>;
}
