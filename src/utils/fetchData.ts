import { baseUrl } from "../api/gorest";

export async function fetchData(pageNumber: number, endpoint: string) {
  const response = await fetch(baseUrl + endpoint + `?page=${pageNumber}`);
  const data = await response.json();
  return data;
}
