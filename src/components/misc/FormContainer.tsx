import { ReactNode } from "react";

// komponent kontenera formularza

export default function FormContainer({
  children,
  handleSubmit,
}: {
  children: ReactNode;
  handleSubmit: any;
}) {
  return (
    <form
      className="flex lg:flex-row flex-col p-2 bg-slate-50 rounded-md shadow-sm border-[1px] border-sky-200 mb-3"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
