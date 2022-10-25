export interface UserFormData {
  name: string;
  gender: "male" | "female";
  email: string;
  status: "active" | "inactive";
}

// funckja wysłania zapytania z dodaniem użytkownika do bazy
export async function postUser(data: UserFormData) {
  try {
    const response = await fetch("https://gorest.co.in/public/v1/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer ee6c0a507d1b39d2ab806b9e94df904396c2a2785546fbe086da09659c81cf3e",
      },
      body: JSON.stringify(data),
    });
    return await response;
  } catch {
    alert("Check internet connection");
  }
}
