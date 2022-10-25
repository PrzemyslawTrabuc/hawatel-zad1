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

//formularz zapewniający dodawnie postów

const defaultFormValues: PostFormData = {
  // definicja typu
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
    // funckcja obsługująca wysłanie formularza
    event.preventDefault(); // zapobieganie odświeżeniu strony po wysłaniu formularza
    if (isLoading) return;
    setError(null);
    setIsLoading(true); //ustawia stan ładowania
    const response = await postPost(formData); // zapytanie do bazy z prośbą o dodanie postu
    if (!response) throw error; // jeśli brak odpowiedzi opuszcza funkcję
    const data = await response.json();
    if (response.ok === false) {
      // jeśli odpowiedź zawiera błąd ustawia stan błędu
      setError(data.data);
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        }); // przwija stronę w dół aby użytkownik zobaczył błąd lub sukces
      }, 300);
    } else {
      // jeśli zapytanie zwróci sukces, czyści formularz
      setError("success");
      setFormData(defaultFormValues);
      if (context.posts?.meta.pagination.page === 1) {
        // jeśli użytkownik znajduje się na 1 stronie od razu pobiera nowe dane aby klient mógł zobaczyć dodane dane
        //jeśli użytkownik znaduje się w
        const posts = await fetchData("posts", 1);
        dispatch({ type: ActionsTypes.FETCH_POSTS, payload: posts });
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // przewija stronę w górę aby użytkownik zobaczył błąd lub sukces
        }, 300);
      }
    }
    setIsLoading(false); // czyści stan łaodwania
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
              onChange={
                (e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value }) // ustawienie wartości stany gdy uzytkownik wprowadza dane
              }
              className="border-2 border-sky-200 rounded-md"
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
              className="border-2 border-sky-200 rounded-md"
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
              className="border-2 border-sky-200 rounded-md"
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
              className="border-2 border-sky-200 rounded-md"
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
