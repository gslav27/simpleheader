import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from './utilities/themes/themes';

import App from './App';


ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  ),
  document.getElementById('root'),
);

module.hot.accept();
