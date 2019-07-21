import React from 'react';
import {Provider} from 'mobx-react';
import store from './store';
import Routing from './Routing';
import './assets/scss/main.scss';

function App() {
  return (
    <Provider store={store} >
      <Routing />
    </Provider>
  );
}

export default App;
