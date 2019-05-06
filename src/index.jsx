import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import 'typeface-karla';

import './reset.css';
import './base.css';
import './services/GoogleAnalytics';
import theme from './utils/theme';
import Home from './routes/Home';
import Support from './routes/Support';
import Servers from './routes/Servers';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/servers" component={Servers} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
