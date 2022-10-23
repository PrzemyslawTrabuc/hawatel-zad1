import { useState } from "react";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import Success from "../misc/Success";
import { postPost, PostFormData } from "../../utils/postPost";

const defaultFormValues: PostFormData = {
  user: "",
  user_id: -1,
  title: "",
  body: "active",
};

function AddUserForm() {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<PostFormData>(defaultFormValues);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    setError(null);
    setIsLoading(true);
    event.preventDefault();
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
          type="text"
          placeholder="User ID"
          name="user_id"
          value={formData.user_id}
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

export default AddUserForm;
