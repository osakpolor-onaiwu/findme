import axios from "axios";
import GetError from "./errorAction";

const LogAction = (payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return (dispatch) => {
    axios
      .get("/logs", config)
      .then((res) => {
        dispatch({
          type: "LOGS_GET",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        // dispatch(
        //   GetError(err.response.data, err.response.status, "LOGS_ERROR")
        // );
        dispatch({
          type: "LOGS_GET_ERR",
        });
      });
  };
};

export default LogAction;
