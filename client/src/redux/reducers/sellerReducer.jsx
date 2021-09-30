const initialState = {
  status: "",
  err: null,
  success: null,
};

const SellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELLER_SUCCESS":
      return {
        ...state,
        status: "Your details have been successully submitted",
        success: action.response.status,
      };
    case "SELLER_ERROR":
      return { ...state, status: "An error occured", err: action.err.message };
    default:
      return state;
  }
};

export default SellerReducer;
