import { Meta } from "./Meta";
export interface User {
  meta: Meta;
  data: [
    {
      id: string;
      name: string;
      email: string;
      gender: "male" | "female";
      status: "active" | "inactive";
    }
  ];
}
