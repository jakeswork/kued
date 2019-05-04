import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import 'typeface-karla';

import './reset.css';
import './base.css';
import Home from './routes/Home';
import Contact from './routes/Contact';

const theme = {
  fontFamily: 'Karla,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  colorPrimary: '#fc3a3e',
  colorSecondary: '#17233a',
  textPrimary: '#2b090a',
  textSecondary: '#b1a0a0',
  textGrey: '#ccc',
  media: {
    mobile: '@media all and (max-width: 414px)',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
