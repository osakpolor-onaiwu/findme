import axios from 'axios';
import TokenConfig from './tokenConfig';
import GetError from './errorAction';

//check token and load user

const loadUser = () => {
  return (dispatch, getState) => {
    //User loading
    // ensure it checks if user loading in
    // auth reducer
    dispatch({ type: 'USER_LOADING' });

    axios
      .get('/user', TokenConfig(getState))
      .then((res) => {
        dispatch({ type: 'USER_LOADED', user: res.data });
      })
      .catch((err) => {
        dispatch(GetError(err.response.data, err.response.status));
        dispatch({ type: 'LOAD_USER_ERROR' });
      });
  };
};

export default loadUser;
