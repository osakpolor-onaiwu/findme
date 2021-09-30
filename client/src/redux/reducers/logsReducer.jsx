const initialState = {
  logs: [],
  err: null,
};

const LogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGS_GET":
      return {
        ...state,
        logs: action.payload,
      };

    case "LOGS_GET_ERR":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default LogsReducer;
