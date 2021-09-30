const initialState = {
  faq: [],
  error: null,
};

const Faq = (state = initialState, action) => {
  switch (action.type) {
    case "FAQ_SUCCESS":
      return { ...state, faq: action.data };
    case "FAQ_ERROR":
      return { ...state, error: action.data };
    default:
      return state;
  }
};

export default Faq;
