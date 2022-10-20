import { baseUrl } from "../api/gorest";

export async function fetchUsers() {
  const response = await fetch(baseUrl + "users");
  const data = await response.json();
  //console.log(data);
  return data;
}
