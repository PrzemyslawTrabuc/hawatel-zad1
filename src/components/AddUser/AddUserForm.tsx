import { useContext, useState } from "react";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import Success from "../misc/Success";
import { postUser, UserFormData } from "../../utils/postUser";
import { fetchData } from "../../utils/fetchData";
import { appContext, dispatchContext } from "../../context/appContext";
import { ActionsTypes } from "../../interfaces/AppContext";
import Center from "../misc/Center";
import ColumnWrapper from "../misc/ColumnWrapper";
import FormContainer from "../misc/FormContainer";
import MyButton from "../misc/MyButton";

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
  const { dispatch } = useContext(dispatchContext);
  const { context } = useContext(appContext);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setError(null);
    setIsLoading(true);
    const response = await postUser(formData);
    if (!response) throw error;
    const data = await response.json();
    if (response.ok === false) {
      setError(data.data);
    } else {
      setError("success");
      setFormData(defaultFormValues);
      if (context.users?.meta.pagination.page === 1) {
        const users = await fetchData("users", 1);
        dispatch({ type: ActionsTypes.FETCH_USERS, payload: users });
      }
    }
    setIsLoading(false);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 300);
  };

  return (
    <>
      <Center>
        <FormContainer handleSubmit={handleSubmit}>
          <ColumnWrapper>
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
              className="border-2 border-sky-200 rounded-md"
            ></input>
          </ColumnWrapper>
          <ColumnWrapper>
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
              className="border-2 border-sky-200 rounded-md"
            ></input>
          </ColumnWrapper>
          <ColumnWrapper>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="border-2 border-sky-200 rounded-md"
            >
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </ColumnWrapper>
          <ColumnWrapper>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="border-2 border-sky-200 rounded-md"
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </ColumnWrapper>
          <MyButton type="submit">Add</MyButton>
          {isLoading && <Loading></Loading>}
        </FormContainer>
      </Center>
      <Center>
        {error && error !== "success" && <Error errorData={error} />}
        {error === "success" && <Success />}
      </Center>
    </>
  );
}

export default AddUserForm;
