import { ReactNode } from "react";

export default function ContainerWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="container mx-auto">{children}</div>;
}
