import axios from "axios";

const CategoryGet = () => {
  return (dispatch) => {
    axios
      .get("/categories")
      .then((response) => {
        dispatch({
          type: "GET_CATEGORY",
          response: response.data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "GET_CATEGORY_ERROR", err });
      });
  };
};

export default CategoryGet;
