import React from 'react';
import {Provider} from 'react-redux'
import { store } from './store';


import './App.css';

const App: React.FC = () => {
  return (
    <Provider
      store={store}
    >
      <div className='App'>
        <p>Test React Redux</p>
      </div>
    </Provider>
  );
}

export default App;
