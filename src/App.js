import React from 'react'
import { Provider } from 'react-redux';
import { persistor, store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>Abhi chhoti hu, badi hokar thar banugi....</div>
      </PersistGate>
    </Provider>
  );
}

export default App;
