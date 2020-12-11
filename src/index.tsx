import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./_assets/scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import "./i18next";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={(<div>Loading ~</div>)}>
        <App />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
