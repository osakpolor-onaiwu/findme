import axios from 'axios';
import GetError from './errorAction';

//Login User
const LoginAction = (userDetails) => {
  return (dispatch) => {
    //headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //Request body
    const body = JSON.stringify(userDetails);

    axios
      .post('/auth', body, config)
      .then((res) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          user: res.data,
          userDetail: userDetails,
        });
      })
      .catch((err) => {
        dispatch(
          GetError(err.response.data, err.response.status, 'LOGIN_FAIL'),
        );
        dispatch({
          type: 'LOGIN_ERROR',
        });
      });
  };
};

export default LoginAction;
