import { ReactNode } from "react";

export default function Banner({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-2 w-full text-center p-10 bg-sky-500 text-white text-2xl font-bold">
      {children}
    </h1>
  );
}
