const initialState = {
  manufacturers: [],
  samples: [],
};

const ManufacturersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MANUFACTURERS_GET":
      return {
        ...state,
        manufacturers: action.payload,
      };

    case "MANUFACTURERS_GET_ERR":
      return {
        ...state,
      };

    case "GET_SAMPLE":
      return {
        ...state,
        samples: action.payload,
      };

    case "GET_SAMPLE_ERR":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default ManufacturersReducer;
