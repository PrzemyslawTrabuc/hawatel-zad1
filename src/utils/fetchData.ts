import { baseUrl } from "../api/gorest";

// funckja pobrania danych zaleznie od przekaznego parametru endpoint

export async function fetchData(endpoint: string, pageNumber?: number) {
  try {
    const response = await fetch(
      `${baseUrl}${endpoint}?page=${pageNumber}&per_page=12`,
      {
        headers: {
          Authorization:
            "Bearer ee6c0a507d1b39d2ab806b9e94df904396c2a2785546fbe086da09659c81cf3e",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch {
    alert("Check internet connection");
  }
}
