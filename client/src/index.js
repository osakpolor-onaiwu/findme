import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RootReducer from "./redux/reducers/rooReducer";

const store = createStore(
  RootReducer,
  compose(applyMiddleware(thunk.withExtraArgument()), composeWithDevTools())
);

// const store = createStore(
//   RootReducer,
//   compose(applyMiddleware(thunk.withExtraArgument()))
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
