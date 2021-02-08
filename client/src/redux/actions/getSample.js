import axios from 'axios';

const GetSample = (payload) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return (dispatch) => {
    axios
      .get('/samples', config)
      .then((res) => {
        dispatch({
          type: 'GET_SAMPLE',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'GET_SAMPLE_ERR',
          err,
        });
      });
  };
};

export default GetSample;
