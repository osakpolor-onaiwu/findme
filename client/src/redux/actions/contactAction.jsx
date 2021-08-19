import axios from "axios";

const ContactAction = (payload) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //Request body
    const body = JSON.stringify(payload);

    axios
      .post("/feedback", body, config)
      .then((response) => {
        dispatch({
          type: "FEEDBACK_SUCCESS",
          response: response.data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "FEEDBACK_ERROR", err });
      });
  };
};

export default ContactAction;
