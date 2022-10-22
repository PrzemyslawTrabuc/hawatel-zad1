import { AppContext, Action } from "../interfaces/AppContext";

export const appRedcuer = (state: AppContext, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS":
      console.log("usersAction");
      return { ...state, users: payload };
    case "FETCH_TODOS":
      console.log("todosAction");
      return { ...state, todos: payload };
    case "FETCH_POSTS":
      console.log("postsAction");
      return { ...state, posts: payload };
    case "FETCH_COMMENTS":
      console.log("commentsAction");
      return { ...state, comments: payload };

    default:
      throw new Error("No action specified");
  }
};
