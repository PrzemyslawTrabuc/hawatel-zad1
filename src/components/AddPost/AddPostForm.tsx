import { useState } from "react";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import Success from "../misc/Success";
import { postPost, PostFormData } from "../../utils/postPost";

const defaultFormValues: PostFormData = {
  user: "",
  user_id: 0,
  title: "",
  body: "",
};

function AddPostForm() {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<PostFormData>(defaultFormValues);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setError(null);
    setIsLoading(true);
    const response = await postPost(formData);
    const data = await response.json();
    if (response.ok === false) {
      setError(data.data);
    } else {
      setError("success");
      setFormData(defaultFormValues);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User:</label>
        <input
          id="user"
          type="text"
          placeholder="User"
          name="user"
          value={formData.user}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></input>
        <label htmlFor="user">User:</label>
        <input
          id="user_id"
          type="number"
          placeholder="User ID"
          name="user_id"
          value={formData.user_id}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></input>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></input>
        <label htmlFor="body">Body:</label>
        <input
          id="body"
          type="text"
          placeholder="Body"
          name="body"
          value={formData.body}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></input>

        <button type="submit">Add</button>
        {isLoading && <Loading></Loading>}
      </form>
      {error && error !== "success" && <Error errorData={error} />}
      {error === "success" && <Success />}
    </>
  );
}

export default AddPostForm;
