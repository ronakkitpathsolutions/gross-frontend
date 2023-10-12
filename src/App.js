import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./containers/auth/login";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
