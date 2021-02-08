const TokenConfig = (getState) => {
    //get token from state, the auth is from combined
    // reducer, the token is from the auth reducer
    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};

export default TokenConfig;
