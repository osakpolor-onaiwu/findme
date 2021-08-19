const initialState = {
  status: "",
  err: null,
  success: null,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FEEDBACK_SUCCESS":
      return {
        ...state,
        status: "Feedback uccessully submitted",
        success: action.response.status,
      };
    case "FEEDBACK_ERROR":
      return { ...state, status: "An error occured", err: action.err.message };
    default:
      return state;
  }
};

export default ContactReducer;
