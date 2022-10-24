import { baseUrl } from "../api/gorest";

export async function fetchData(endpoint: string, pageNumber?: number) {
  try {
    const response = await fetch(
      `${baseUrl}${endpoint}?page=${pageNumber}&per_page=12`
    );
    const data = await response.json();
    return data;
  } catch {
    alert("Check internet connection");
  }
}
