import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Routing from "./routes";

const initialToast = {
  hideProgressBar: true,
  closeOnClick: true,
  rtl: false,
  newestOnTop: false,
  draggable: true,
  pauseOnHover: true
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ToastContainer {...{ initialToast }} />
          <Routing />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
