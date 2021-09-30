const initialState = {
  category: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.response,
      };

    case "GET_CATEGORY_ERROR":
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default CategoryReducer;
