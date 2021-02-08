const GetError = (msg, status, id) => {
    return {
        type: "GET_ERROR",
        payload: { msg, status, id },
    };
};

export default GetError;
