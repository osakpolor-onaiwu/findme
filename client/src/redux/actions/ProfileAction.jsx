import axios from 'axios';
import TokenConfig from './tokenConfig';

const ProfileAction = (profile) => {
  return (dispatch, getState) => {
    axios
      .post('/profile', profile, TokenConfig(getState))
      .then((res) => {
        axios
          .get('/profileget', TokenConfig(getState))
          .then((res) => {
            console.log(res.data);
            dispatch({
              type: 'PROFILE',
              payload: res.data,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export default ProfileAction;
