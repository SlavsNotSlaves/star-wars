import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@store/store';
import App from '@containers/App';
import ThemeProvider from '@context/ThemeProvider';

import '@styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);  
