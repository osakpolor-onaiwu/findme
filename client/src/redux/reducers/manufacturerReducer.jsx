const initialState = {
    manufacturers: [],
    samples: [],
};

const  ManufacturersReducer=(state = initialState, action) => {
    switch (action.type) {
        case "MANUFACTURERS_GET":
            console.log(action.payload)
            return {
                ...state,
                manufacturers: action.payload
            };

        case "MANUFACTURERS_GET_ERR":
            console.log(action.err)
            return {
                ...state,
            };

        case "GET_SAMPLE":
            console.log(action.payload)
            return {
                ...state,
                samples: action.payload
            };

        case "GET_SAMPLE_ERR":
            console.log(action.err)
            return {
                ...state
            };

        default:
            return state;
    }
};

export default ManufacturersReducer
