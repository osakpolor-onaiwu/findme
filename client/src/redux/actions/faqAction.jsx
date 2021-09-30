import axios from "axios";

const faqAction = (payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return (dispatch) => {
    axios
      .get("/faq", config)
      .then((res) => {
        dispatch({
          type: "FAQ_SUCCESS",
          data: res.data.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: "FAQ_ERROR",
          data: e,
        });
      });
  };
};

export default faqAction;
