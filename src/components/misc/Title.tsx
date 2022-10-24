import { ReactNode } from "react";

export default function Title({
  children,
  size,
}: {
  children: ReactNode;
  size: "sm" | "base" | "lg" | "xl" | "2xl";
}) {
  return <h1 className={`font-medium text-${size}`}>{children}</h1>;
}
