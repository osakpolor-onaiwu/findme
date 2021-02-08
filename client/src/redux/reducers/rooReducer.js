import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
import AuthReducer from "./authReducer";
import NewsReducer from "./newsReducer";
import ManufacturersReducer from "./manufacturerReducer";
import errorReducer from "./errorReducer";

const RootReducer = combineReducers({
    auth: AuthReducer,
    category: CategoryReducer,
    news: NewsReducer,
    manufacturers: ManufacturersReducer,
    error: errorReducer,
});

export default RootReducer;
