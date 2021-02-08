import axios from "axios";
import TokenConfig from "./tokenConfig";

//logs the user out

const SignOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: "LOGOUT_SUCCESS" });
    };
};

export default SignOut;
