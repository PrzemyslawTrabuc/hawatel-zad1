import { baseUrl } from "../api/gorest";

export async function fetchData(endpoint: string, pageNumber?: number) {
  try {
    const response = await fetch(`${baseUrl}${endpoint}?page=${pageNumber}`);
    const data = await response.json();
    return data;
  } catch {
    alert("Check internet connection");
  }
}
