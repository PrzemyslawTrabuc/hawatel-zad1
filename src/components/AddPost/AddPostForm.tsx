import { useContext, useState } from "react";
import Error from "../misc/Error";
import Loading from "../misc/Loading";
import Success from "../misc/Success";
import { postPost, PostFormData } from "../../utils/postPost";
import FormContainer from "../misc/FormContainer";
import MyButton from "../misc/MyButton";
import Center from "../misc/Center";
import ColumnWrapper from "../misc/ColumnWrapper";
import { appContext, dispatchContext } from "../../context/appContext";
import { ActionsTypes } from "../../interfaces/AppContext";
import { fetchData } from "../../utils/fetchData";

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
  const { context } = useContext(appContext);
  const { dispatch } = useContext(dispatchContext);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setError(null);
    setIsLoading(true);
    const response = await postPost(formData);
    if (!response) throw error;
    const data = await response.json();
    if (response.ok === false) {
      setError(data.data);
    } else {
      setError("success");
      setFormData(defaultFormValues);
      if (context.posts?.meta.pagination.page === 1) {
        const posts = await fetchData("posts", 1);
        dispatch({ type: ActionsTypes.FETCH_POSTS, payload: posts });
      }
    }
    setIsLoading(false);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <Center>
        <FormContainer handleSubmit={handleSubmit}>
          <ColumnWrapper>
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
          </ColumnWrapper>
          <ColumnWrapper>
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
          </ColumnWrapper>
          <ColumnWrapper>
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
          </ColumnWrapper>
          <ColumnWrapper>
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

export default AddPostForm;
