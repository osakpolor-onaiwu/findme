import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
import AuthReducer from "./authReducer";
import NewsReducer from "./newsReducer";
import ManufacturersReducer from "./manufacturerReducer";
import ErrorReducer from "./errorReducer";
import ContactReducer from "./contactReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
  news: NewsReducer,
  manufacturers: ManufacturersReducer,
  error: ErrorReducer,
  contact: ContactReducer,
});

export default RootReducer;
