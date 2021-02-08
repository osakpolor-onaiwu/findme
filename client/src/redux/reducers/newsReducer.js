const initialState = {
    news: []
};

const NewsReducer=(state = initialState, action) => {
    switch (action.type) {
        case "GET_NEWS":
            console.log(action.response)
            return {
                ...state,
                news: action.response
            };

        case "GET_NEWS_ERROR":
            console.log(action.err);
            return {
                ...state
            };

        default:
            return state;
    }
};

export default NewsReducer