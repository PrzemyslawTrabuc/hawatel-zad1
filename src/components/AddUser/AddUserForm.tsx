import { useState } from "react";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import Success from "../misc/Success";
import { postUser, UserFormData } from "../../utils/postUser";

const defaultFormValues: UserFormData = {
  name: "",
  gender: "female",
  email: "",
  status: "active",
};

function AddUserForm() {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserFormData>(defaultFormValues);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setError(null);
    setIsLoading(true);
    const response = await postUser(formData);
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        ></input>
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        >
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        >
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>
        <button type="submit">Add</button>
        {isLoading && <Loading></Loading>}
      </form>
      {error && error !== "success" && <Error errorData={error} />}
      {error === "success" && <Success />}
    </>
  );
}

export default AddUserForm;
