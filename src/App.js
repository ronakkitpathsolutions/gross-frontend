import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Routing from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Suspense>
            <Routing />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
