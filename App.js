import  React from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import AppRoot from './AppRoot';

const store = configureStore();
function App() {


  return (
    <Provider store={store}>
        <AppRoot/>
    </Provider>
  );
}

export default App;
