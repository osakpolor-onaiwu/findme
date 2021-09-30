const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //from login action
    case "LOGIN_ERROR": {
      localStorage.removeItem("token");
      localStorage.removeItem("user details");
      // console.log("login error");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        loggedIn: null,
      };
    }

    case "LOGIN_SUCCESS":
      // console.log("login success");
      localStorage.setItem("token", action.user.token);
      const userDetail = JSON.stringify(action.userDetail);
      localStorage.setItem("user details", userDetail);
      return {
        ...state,
        ...action.user,
        isAuthenticated: true,
        isLoading: false,
      };

    //from load user action
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user,
      };
    case "LOAD_USER_ERROR":
      localStorage.removeItem("token");
      localStorage.removeItem("user detail");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    //from signout
    case "LOGOUT_SUCCESS":
      // console.log("Logout success");
      localStorage.removeItem("token");
      localStorage.removeItem("user details");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    //from signUP

    case "SIGNUP_SUCCESS":
      localStorage.setItem("token", action.createduser.token);
      return {
        ...state,
        ...action.createduser,
        isAuthenticated: true,
        isLoading: false,
      };

    case "SIGNUP_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default authReducer;
