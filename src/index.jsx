import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import 'typeface-open-sans';
import 'typeface-quicksand';

import './reset.css';
import './base.css';
import Home from './routes/Home';

const theme = {
  fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  colorPrimary: '#fc3a3e',
  colorSecondary: '#17233a',
  textPrimary: '#2b090a',
  textSecondary: '#eadfdf',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
