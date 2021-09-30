import axios from "axios";

const SellerAction = (payload) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //Request body
    const body = JSON.stringify(payload);

    axios
      .post("/seller", body, config)
      .then((response) => {
        dispatch({
          type: "SELLER_SUCCESS",
          response: response.data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "SELLER_ERROR", err });
      });
  };
};

export default SellerAction;
