import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';
import 'typeface-karla';

import './reset.css';
import './base.css';
import GoogleAnalytics from './services/GoogleAnalytics';
import theme from './utils/theme';
import routes from './routes';

GoogleAnalytics.init();

render(
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        {
          routes.map(({ path, Component, title }) => (
            <Route
              key={path}
              path={path}
              exact
              render={() => {
                GoogleAnalytics.pageview();

                return (
                  <Fragment>
                    <Helmet>
                      <title>
                        { title }
                      </title>
                    </Helmet>
                    <Component />
                  </Fragment>
                );
              }}
            />
          ))
        }
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
