import axios from 'axios';

const CategoryGet = () => {
  return (dispatch) => {
    axios
      .get('/categories')
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'GET_CATEGORY',
          response: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'GET_CATEGORY_ERROR', err });
      });
  };
};

export default CategoryGet;
